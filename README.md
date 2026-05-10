<p align="center">
    <img src="https://github.com/minhtuannguyen/homebridge-fritz-platform/blob/master/images/fb_logo.png" height="200">
</p>

# homebridge-fritz-platform

> ⚠️ **This is a community fork** of the original [SeydX/homebridge-fritz-platform](https://github.com/SeydX/homebridge-fritz-platform), updated to work with **Homebridge v2** (released May 2026) and HAP-NodeJS v1. The original project is no longer actively maintained for v2. All credit for the plugin goes to the original author [@SeydX](https://github.com/SeydX).

## Info

> Compatible with **Homebridge v1.6+** and **Homebridge v2**. Requires **Node.js 18.20+, 20.15+ or 22**.

### Installing this fork

Since this fork is not published on npm, install it directly from GitHub.

**Local clone (development / testing):**

```bash
git clone https://github.com/minhtuannguyen/homebridge-fritz-platform.git
cd homebridge-fritz-platform
npm install
sudo npm link                # exposes the package globally
sudo npm link homebridge-fritz-platform   # in your homebridge user dir
sudo hb-service restart
```
#### On a Raspberry Pi (or any Linux machine running Homebridge as the `homebridge` user)

```bash
git clone https://github.com/minhtuannguyen/homebridge-fritz-platform.git 
cd homebridge-fritz-platform

npm install

sudo -u homebridge npm link

cd /var/lib/homebridge
sudo -u homebridge npm link /path/to/homebridge-fritz-platform

sudo hb-service restart
```

After installing you may need to **remove the old plugin entry** in the Homebridge UI, because the original `homebridge-fritz-platform` package on npm and this fork share the same plugin name.

This plugin allows almost full control of **AVM** hardware like:

- **Fritz!Box**
  - Router status and switch functionality,
  - WLAN 2.4Ghz,
  - WLAN 5Ghz, 
  - WLAN Guest,
  - WPS,
  - DECT,
  - Answering Machine,
  - Deflection,
  - Device LED,
  - Device Lock,
  - Ring Lock,
  - Phonebook,
  - Alarm,
  - Wakeup,
  - DNS Server
  - Broadband
  - Reconnect
  - Child Lock
  - Fallback Internet
- **Fritz!Repeater**
  - Repeater status and switch functionality,
  - WLAN 2.4Ghz,
  - WLAN 5Ghz,
  - WLAN Guest,
  - WPS,
  - Device LED,
  - Device Lock
- **Fritz!Fon**
  - Callmonitor (with adjustable filter for incoming/outgoing numbers),
  - FakeGato support
- **Fritz!DECT Buttons, Telekom Wandtaster**
  - Support for buttons with 1/4 channels
  - Temperature sensor with FakeGato,
  - Humidity sensor with FakeGato,
  - FakeGato support
- **Fritz!DECT Outlets, Fritz!Powerline Outlets**
  - Switch/Outlet status and switch functionality,
  - Power meter,
  - Temperature sensor with FakeGato,
  - Telegram notification when device is in use/not in use
  - FakeGato support
- **Fritz!DECT Lights**
  - Light status and switch functionality,
  - Brightness adjustment,
  - Color adjustment,
  - Apple adaptive lighting
- **Fritz!DECT Thermostats, Comet!DECT Thermostats**
  - Thermostat current state, target state, current temperature and target temperature state and switch functionality,
  - Temperature sensor,
  - Humidity sensor with FakeGato,
  - Window sensor (for window open functionality)
  - Open Window detection (to trigger manually open window)
  - FakeGato support
- **Rollotron DECT 1213/Blind/Shutter**
  - Position adjustment/status
- **HAN-FUN sensors (e.g. Deutsche Telekom)**
  - Contact state,
  - FakeGato support
- **Presence**
  - Detect occupancy through wifi,
  - Detect occupancy through guest wifi,
  - Fakegato support
- **Watch Network**
  - Control devices if connected or disconnected from network
- **Telegram**
  - Receive custom messages for occupancy detection (presence), device detection (watch network), incoming/outgoing calls (callmonitor), alarm, router state and outlet usage

Any system capable of running [Homebridge](https://github.com/nfarina/homebridge/) can be used to run **homebridge-fritz-platform**. The only need is network access to the device or program in question.



## Disclaimer

All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
