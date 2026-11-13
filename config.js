// Committed intentionally: this page is public by design. It holds no MQTT
// credentials at all - every wake request goes through the gemini-home-bridge
// Worker, which is the only thing that knows the real MQTT broker login.
const WAKE_CONFIG = {
  WORKER_URL: "https://gemini-home-bridge.esp32-wol-aaryan.workers.dev",
};
