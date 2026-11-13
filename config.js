// Committed intentionally: this page is public by design, so it uses a
// dedicated low-privilege credential (not the ESP32's own MQTT login).
// See ../credentials.txt (gitignored) for the ESP32's separate credential.
const WAKE_CONFIG = {
  MQTT_HOST: "db9538b2674d4f4e94e09d827ef7a2da.s1.eu.hivemq.cloud",
  MQTT_WSS_PORT: 8884,
  MQTT_USER: "wake-button-public",
  MQTT_PASS: "hello123",
  WAKE_TOPIC: "home/pc/wake",
  ACK_TOPIC: "home/pc/wake/ack",
};
