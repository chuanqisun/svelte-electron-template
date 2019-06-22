<script>
  // consume electron API
  const app = require("electron").remote.app;

  // consume node API
  const os = require("os");

  // consume svelte stores
  import { demoStore } from "../store";
</script>

<style>
  main {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    color: #ff3e00;
  }
</style>

<main>
  <img src="dist/assets/svelte-logo.svg" alt="svelte logo" />
  <h1>{$demoStore}</h1>
  <ul>
    <li>We are using node {process.versions.node}</li>
    <li>Chrome {process.versions.chrome}</li>
    <li>and Electron {process.versions.electron}</li>
    <li>platform architecture: {os.arch()}</li>
    <li>app path: {app.getAppPath()}</li>
  </ul>
</main>
