import { Box } from "@mui/material";
import AppRoutes from "router/Router";
import { Navbar } from "components";
import { LAYOUT_MAX_WIDTH } from "consts";
import { styled } from "@mui/system";
import SelectWallet from "components/SelectWallet";
import { useWalletActions } from "store/wallet/hooks";
import { AppGrid } from "styles/styles";
import useEffectOnce from "hooks/useEffectOnce";
import { useWebAppResize } from "store/application/hooks";
import './services/i18next/i18n';
import { useEffect } from 'react'
import { TonClient } from 'ton'
import { setClienT } from 'services/api'
import { getSupportedWallets } from 'services/wallets/adapters/TonConnectAdapter'
import { adapters } from 'services/wallets/config'
import { Adapters } from 'services/wallets/types'

const StyledAppContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  position: "relative",
  paddingBottom: 30,
  maxWidth: LAYOUT_MAX_WIDTH,
  marginLeft: "auto",
  marginRight: "auto",
  flex: 1,
});

const StyledRoutesContainer = styled(AppGrid)({
  flex: 1,
});

const App = () => {
  const { restoreSession } = useWalletActions();
  useWebAppResize();

  useEffectOnce(() => {
    restoreSession();
  });

  useEffect(() => {
    (async () => {
      const _client = new TonClient({
        endpoint: "https://mainnet.tonhubapi.com/jsonRPC",
      });
      setClienT(_client)
    })();
  }, [])

  useEffect(() => {
    const fetchTonConnectDevices = async () => {
      const supportedWallets = await getSupportedWallets()
      supportedWallets.map((w) => {
        adapters.push({
          name: w.name,
          type: w.name === 'OpenMask' ? Adapters.OPENMASK : Adapters.TON_KEEPER,
          icon: w.imageUrl,
          mobileCompatible: w.name !== 'OpenMask',
          description: w.name === 'OpenMask'
            ? 'TON Wallet Plugin for Google Chrome'
            : 'A mobile wallet in your pocket',
          tonConnect: true,
        })
      })
    }
    fetchTonConnectDevices()
  },[])

  return (
    <>
      <StyledAppContainer>
        <Navbar />
        <SelectWallet />
        <StyledRoutesContainer>
          <AppRoutes />
        </StyledRoutesContainer>
      </StyledAppContainer>
    </>
  );
};

export default App;
