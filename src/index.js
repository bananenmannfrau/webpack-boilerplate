import wasm from "./main.rs";

wasm.initialize({ noExitRuntime: true }).then(module => {
  // you can call module.cwrap here to get function wrappers for Rust functions
});
