import { AppBar, Toolbar, styled, Box } from "@mui/material"
import LoginDialog from "./account/LoginDialog"
import { useContext } from "react"
import { AccountContext } from "../context/AccountProvider"
import ChatDialog from "./chat/ChatDialog"

const MainComponent = styled(Box)`
    height:100vh;
    background-color : #e1e1dd;
`

const LoginHeader = styled(AppBar)`
    height:200px;
    background-color:#00a783;
    box-shadow:none;
`

const ChatHeader = styled(AppBar)`
    height:124px;
    background-color:#00a783;
    box-shadow:none;
`

const Messenger = () => {

  const { account } = useContext(AccountContext)
  return (
    <MainComponent>
      {account ? 
      <>
        <ChatHeader>
          <Toolbar>
          </Toolbar>
          </ChatHeader>
          <ChatDialog/>
        </> :
        <><LoginHeader>
          <Toolbar>
          </Toolbar>
        </LoginHeader>
          <LoginDialog /></>}
    </MainComponent>
  )
}

export default Messenger