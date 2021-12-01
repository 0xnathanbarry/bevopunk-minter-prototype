import { useEffect, useState } from "react";
import {
  connectWallet,
  getCurrentWalletConnected,
  mintNFT,
} from "./util/interact.js";

const Minter = (props) => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [pressed, setPressed] = useState(false);

  const [name, setName] = useState("Sriram Bevo");
  const [description, setDescription] = useState("A Sriram Bevo. Legendary");
  const [url, setURL] = useState(
    "https://gateway.pinata.cloud/ipfs/QmaVuhM7dkjxoe6mMVp1y5LRio4vef1vgHVbXsvDYxoRqs"
  );

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    const { success, status } = await mintNFT(url, name, description);
    setStatus(status);
    if (success) {
      setName("");
      setDescription("");
      setURL("");
      setPressed(true);
    }
  };

  return (
    <div className="Minter">
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <br></br>
      <h1 id="title">BevoPunk Minter!</h1>
      <p>Simply press "Mint NFT" to mint a BevoPunk!</p>

      {!pressed ? (
        <img style={{ width: "50%" }} src="bevoNFT5.png" />
      ) : (
        <img style={{ width: "50%" }} src="bevoNFT4.png" />
      )}

      <br></br>
      <button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button>
      <p id="status" style={{ color: "blue" }}>
        {status}
      </p>
    </div>
  );
};

export default Minter;
