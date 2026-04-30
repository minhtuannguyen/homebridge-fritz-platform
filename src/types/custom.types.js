'use strict';

exports.registerWith = (hap) => {
  const Characteristic = hap.Characteristic;
  const Service = hap.Service;

  // Wifi 2.4
  Characteristic.WifiTwo = class extends Characteristic {
    constructor() {
      super('WIFI 2.4GHZ', '0026e147-5d51-4f42-b157-6aca6050be8e');
      this.setProps({
        format: hap.Formats.BOOL,
        perms: [hap.Perms.READ, hap.Perms.WRITE, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.WifiTwo.UUID = '0026e147-5d51-4f42-b157-6aca6050be8e';

  // Wifi 5
  Characteristic.WifiFive = class extends Characteristic {
    constructor() {
      super('WIFI 5GHZ', 'a72aeeca-c6ce-45ce-b026-5d400aab5fc9');
      this.setProps({
        format: hap.Formats.BOOL,
        perms: [hap.Perms.READ, hap.Perms.WRITE, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.WifiFive.UUID = 'a72aeeca-c6ce-45ce-b026-5d400aab5fc9';

  // Wifi Guest
  Characteristic.WifiGuest = class extends Characteristic {
    constructor() {
      super('WIFI Guest', 'a87bbf2b-885c-4713-8169-22abdbf0b2a1');
      this.setProps({
        format: hap.Formats.BOOL,
        perms: [hap.Perms.READ, hap.Perms.WRITE, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.WifiGuest.UUID = 'a87bbf2b-885c-4713-8169-22abdbf0b2a1';

  // Phone Book
  Characteristic.PhoneBook = class extends Characteristic {
    constructor() {
      super('Refresh Phone Book', '8f9aeaa4-092f-4c3a-85f1-dfd064a07c3d');
      this.setProps({
        format: hap.Formats.BOOL,
        perms: [hap.Perms.READ, hap.Perms.WRITE, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.PhoneBook.UUID = '8f9aeaa4-092f-4c3a-85f1-dfd064a07c3d';

  // Dial Alarm
  Characteristic.DialAlarm = class extends Characteristic {
    constructor() {
      super('Alarm', '8fe6e841-41e4-479f-b334-8af339ce5b30');
      this.setProps({
        format: hap.Formats.BOOL,
        perms: [hap.Perms.READ, hap.Perms.WRITE, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.DialAlarm.UUID = '8fe6e841-41e4-479f-b334-8af339ce5b30';

  // Wifi WPS
  Characteristic.WifiWPS = class extends Characteristic {
    constructor() {
      super('WIFI WPS', '991dd58c-7d8c-46b1-acd1-411d8f6902ac');
      this.setProps({
        format: hap.Formats.BOOL,
        perms: [hap.Perms.READ, hap.Perms.WRITE, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.WifiWPS.UUID = '991dd58c-7d8c-46b1-acd1-411d8f6902ac';

  // Reconnect
  Characteristic.Reconnect = class extends Characteristic {
    constructor() {
      super('Reconnect', 'ce1cb310-d2d8-4cd1-9686-c6f2aba6ad15');
      this.setProps({
        format: hap.Formats.BOOL,
        perms: [hap.Perms.READ, hap.Perms.WRITE, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.Reconnect.UUID = 'ce1cb310-d2d8-4cd1-9686-c6f2aba6ad15';

  // DECT
  Characteristic.DECT = class extends Characteristic {
    constructor() {
      super('DECT Station', '1718fc65-453b-403a-ab81-79a1c96ba195');
      this.setProps({
        format: hap.Formats.BOOL,
        perms: [hap.Perms.READ, hap.Perms.WRITE, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.DECT.UUID = '1718fc65-453b-403a-ab81-79a1c96ba195';

  // Answering Machine
  Characteristic.AnsweringMachine = class extends Characteristic {
    constructor() {
      super('Answering Machine', 'd19ef9d5-3bc6-47ac-b6bb-7bdcf0df20b0');
      this.setProps({
        format: hap.Formats.BOOL,
        perms: [hap.Perms.READ, hap.Perms.WRITE, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.AnsweringMachine.UUID = 'd19ef9d5-3bc6-47ac-b6bb-7bdcf0df20b0';

  // Deflection
  Characteristic.Deflection = class extends Characteristic {
    constructor() {
      super('Deflection', '658086c7-274c-4988-bd5e-3c720fa3054d');
      this.setProps({
        format: hap.Formats.BOOL,
        perms: [hap.Perms.READ, hap.Perms.WRITE, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.Deflection.UUID = '658086c7-274c-4988-bd5e-3c720fa3054d';

  // Wake Up
  Characteristic.WakeUp = class extends Characteristic {
    constructor() {
      super('Wake Up', 'c60a4aa9-cefb-4c61-8185-ad2b3ba52842');
      this.setProps({
        format: hap.Formats.BOOL,
        perms: [hap.Perms.READ, hap.Perms.WRITE, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.WakeUp.UUID = 'c60a4aa9-cefb-4c61-8185-ad2b3ba52842';

  // Device LED
  Characteristic.DeviceLED = class extends Characteristic {
    constructor() {
      super('LED', 'fd81f0dc-4324-457e-8164-289743873fb1');
      this.setProps({
        format: hap.Formats.BOOL,
        perms: [hap.Perms.READ, hap.Perms.WRITE, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.DeviceLED.UUID = 'fd81f0dc-4324-457e-8164-289743873fb1';

  // Device Lock
  Characteristic.DeviceLock = class extends Characteristic {
    constructor() {
      super('Device Lock', '56af4239-46bc-4bae-b55b-dbc5be2d0897');
      this.setProps({
        format: hap.Formats.BOOL,
        perms: [hap.Perms.READ, hap.Perms.WRITE, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.DeviceLock.UUID = '56af4239-46bc-4bae-b55b-dbc5be2d0897';

  // Ring Lock
  Characteristic.RingLock = class extends Characteristic {
    constructor() {
      super('Ring Lock', 'cab7d43e-422c-4452-bc9a-11c89454332b');
      this.setProps({
        format: hap.Formats.BOOL,
        perms: [hap.Perms.READ, hap.Perms.WRITE, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.RingLock.UUID = 'cab7d43e-422c-4452-bc9a-11c89454332b';

  // DNS Server
  Characteristic.DNSServer = class extends Characteristic {
    constructor() {
      super('DNS Server', 'c34f1eb0-92bb-44a8-b399-17f2599639f1');
      this.setProps({
        format: hap.Formats.BOOL,
        perms: [hap.Perms.READ, hap.Perms.WRITE, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.DNSServer.UUID = 'c34f1eb0-92bb-44a8-b399-17f2599639f1';

  // Fallback Internet
  Characteristic.FallbackInternet = class extends Characteristic {
    constructor() {
      super('Internet Fallback', 'ef088934-4ec8-4174-b550-e8a8faaed88c');
      this.setProps({
        format: hap.Formats.BOOL,
        perms: [hap.Perms.READ, hap.Perms.WRITE, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.FallbackInternet.UUID = 'ef088934-4ec8-4174-b550-e8a8faaed88c';

  // Caller
  Characteristic.Caller = class extends Characteristic {
    constructor() {
      super('Last Caller', 'eb0b2d83-569b-44aa-989d-190a911b4397');
      this.setProps({
        format: hap.Formats.STRING,
        perms: [hap.Perms.READ, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.Caller.UUID = 'eb0b2d83-569b-44aa-989d-190a911b4397';

  // Called
  Characteristic.Called = class extends Characteristic {
    constructor() {
      super('Last Called', 'cf42e4a1-ff61-4aa6-9cc5-55d3c09cfbbd');
      this.setProps({
        format: hap.Formats.STRING,
        perms: [hap.Perms.READ, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.Called.UUID = 'cf42e4a1-ff61-4aa6-9cc5-55d3c09cfbbd';

  // Download
  Characteristic.Download = class extends Characteristic {
    constructor() {
      super('Download', '37574b8e-2d7c-47ee-8b5e-6bfc42f195d9');
      this.setProps({
        format: hap.Formats.STRING,
        perms: [hap.Perms.READ, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.Download.UUID = '37574b8e-2d7c-47ee-8b5e-6bfc42f195d9';

  // Upload
  Characteristic.Upload = class extends Characteristic {
    constructor() {
      super('Upload', '9b2e94f7-a665-4575-9efd-1b37474d758b');
      this.setProps({
        format: hap.Formats.STRING,
        perms: [hap.Perms.READ, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.Upload.UUID = '9b2e94f7-a665-4575-9efd-1b37474d758b';

  // Ping
  Characteristic.Ping = class extends Characteristic {
    constructor() {
      super('Ping', 'ce18aaef-1026-4538-943b-026501599dc0');
      this.setProps({
        format: hap.Formats.FLOAT,
        maxValue: 9999,
        minValue: 0,
        minStep: 0.1,
        perms: [hap.Perms.READ, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.Ping.UUID = 'ce18aaef-1026-4538-943b-026501599dc0';

  /*
   * Service.Switch (extended with custom optional characteristics)
   */
  Service.Switch = class extends Service {
    constructor(displayName, subtype) {
      super(displayName, '00000049-0000-1000-8000-0026BB765291', subtype);

      // Required Characteristics
      this.addCharacteristic(Characteristic.On);

      // Optional Characteristics CUSTOM
      this.addOptionalCharacteristic(Characteristic.WifiTwo);
      this.addOptionalCharacteristic(Characteristic.WifiFive);
      this.addOptionalCharacteristic(Characteristic.WifiGuest);
      this.addOptionalCharacteristic(Characteristic.PhoneBook);
      this.addOptionalCharacteristic(Characteristic.DialAlarm);
      this.addOptionalCharacteristic(Characteristic.WifiWPS);
      this.addOptionalCharacteristic(Characteristic.DECT);
      this.addOptionalCharacteristic(Characteristic.AnsweringMachine);
      this.addOptionalCharacteristic(Characteristic.Deflection);
      this.addOptionalCharacteristic(Characteristic.WakeUp);
      this.addOptionalCharacteristic(Characteristic.DeviceLED);
      this.addOptionalCharacteristic(Characteristic.DeviceLock);
      this.addOptionalCharacteristic(Characteristic.RingLock);
      this.addOptionalCharacteristic(Characteristic.Download);
      this.addOptionalCharacteristic(Characteristic.Upload);
      this.addOptionalCharacteristic(Characteristic.Ping);

      // Optional Characteristics
      this.addOptionalCharacteristic(Characteristic.Name);
    }
  };
  Service.Switch.UUID = '00000049-0000-1000-8000-0026BB765291';
};
