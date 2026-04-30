'use strict';

exports.registerWith = (hap) => {
  const Characteristic = hap.Characteristic;
  const Service = hap.Service;

  // ResetTotal
  Characteristic.ResetTotal = class extends Characteristic {
    constructor() {
      super('Reset Total', 'E863F112-079E-48FF-8F27-9C2605A29F52');
      this.setProps({
        format: hap.Formats.UINT32,
        unit: hap.Units.SECONDS,
        perms: [hap.Perms.READ, hap.Perms.NOTIFY, hap.Perms.WRITE],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.ResetTotal.UUID = 'E863F112-079E-48FF-8F27-9C2605A29F52';

  // HistoryStatus
  Characteristic.HistoryStatus = class extends Characteristic {
    constructor() {
      super('History Status', 'E863F116-079E-48FF-8F27-9C2605A29F52');
      this.setProps({
        format: hap.Formats.DATA,
        perms: [hap.Perms.READ, hap.Perms.NOTIFY, hap.Perms.WRITE],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.HistoryStatus.UUID = 'E863F116-079E-48FF-8F27-9C2605A29F52';

  // HistoryEntries
  Characteristic.HistoryEntries = class extends Characteristic {
    constructor() {
      super('History Entries', 'E863F117-079E-48FF-8F27-9C2605A29F52');
      this.setProps({
        format: hap.Formats.DATA,
        perms: [hap.Perms.READ, hap.Perms.NOTIFY, hap.Perms.WRITE],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.HistoryEntries.UUID = 'E863F117-079E-48FF-8F27-9C2605A29F52';

  // HistoryRequest
  Characteristic.HistoryRequest = class extends Characteristic {
    constructor() {
      super('History Request', 'E863F11C-079E-48FF-8F27-9C2605A29F52');
      this.setProps({
        format: hap.Formats.DATA,
        perms: [hap.Perms.READ, hap.Perms.NOTIFY, hap.Perms.WRITE],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.HistoryRequest.UUID = 'E863F11C-079E-48FF-8F27-9C2605A29F52';

  // SetTime
  Characteristic.SetTime = class extends Characteristic {
    constructor() {
      super('Set Time', 'E863F121-079E-48FF-8F27-9C2605A29F52');
      this.setProps({
        format: hap.Formats.DATA,
        perms: [hap.Perms.READ, hap.Perms.NOTIFY, hap.Perms.WRITE],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.SetTime.UUID = 'E863F121-079E-48FF-8F27-9C2605A29F52';

  // LastActivation
  Characteristic.LastActivation = class extends Characteristic {
    constructor() {
      super('Last Activation', 'E863F11A-079E-48FF-8F27-9C2605A29F52');
      this.setProps({
        format: hap.Formats.UINT32,
        unit: hap.Units.SECONDS,
        perms: [hap.Perms.READ, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.LastActivation.UUID = 'E863F11A-079E-48FF-8F27-9C2605A29F52';

  // TimesOpened
  Characteristic.TimesOpened = class extends Characteristic {
    constructor() {
      super('Times Opened', 'E863F129-079E-48FF-8F27-9C2605A29F52');
      this.setProps({
        format: hap.Formats.UINT32,
        perms: [hap.Perms.READ, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.TimesOpened.UUID = 'E863F129-079E-48FF-8F27-9C2605A29F52';

  // OpenDuration
  Characteristic.OpenDuration = class extends Characteristic {
    constructor() {
      super('Open Duration', 'E863F118-079E-48FF-8F27-9C2605A29F52');
      this.setProps({
        format: hap.Formats.UINT32,
        unit: hap.Units.SECONDS,
        perms: [hap.Perms.READ, hap.Perms.NOTIFY, hap.Perms.WRITE],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.OpenDuration.UUID = 'E863F118-079E-48FF-8F27-9C2605A29F52';

  // ClosedDuration
  Characteristic.ClosedDuration = class extends Characteristic {
    constructor() {
      super('Closed Duration', 'E863F119-079E-48FF-8F27-9C2605A29F52');
      this.setProps({
        format: hap.Formats.UINT32,
        unit: hap.Units.SECONDS,
        perms: [hap.Perms.READ, hap.Perms.NOTIFY, hap.Perms.WRITE],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.ClosedDuration.UUID = 'E863F119-079E-48FF-8F27-9C2605A29F52';

  // CurrentConsumption
  Characteristic.CurrentConsumption = class extends Characteristic {
    constructor() {
      super('Current Consumption', 'E863F10D-079E-48FF-8F27-9C2605A29F52');
      this.setProps({
        format: hap.Formats.FLOAT,
        unit: 'W',
        perms: [hap.Perms.READ, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.CurrentConsumption.UUID = 'E863F10D-079E-48FF-8F27-9C2605A29F52';

  // TotalConsumption
  Characteristic.TotalConsumption = class extends Characteristic {
    constructor() {
      super('Total Consumption', 'E863F10C-079E-48FF-8F27-9C2605A29F52');
      this.setProps({
        format: hap.Formats.FLOAT,
        unit: 'kWh',
        perms: [hap.Perms.READ, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.TotalConsumption.UUID = 'E863F10C-079E-48FF-8F27-9C2605A29F52';

  // Volts
  Characteristic.Volts = class extends Characteristic {
    constructor() {
      super('Volts', 'E863F10A-079E-48FF-8F27-9C2605A29F52');
      this.setProps({
        format: hap.Formats.FLOAT,
        unit: 'V',
        perms: [hap.Perms.READ, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.Volts.UUID = 'E863F10A-079E-48FF-8F27-9C2605A29F52';

  // Amperes
  Characteristic.Amperes = class extends Characteristic {
    constructor() {
      super('Amperes', 'E863F126-079E-48FF-8F27-9C2605A29F52');
      this.setProps({
        format: hap.Formats.FLOAT,
        unit: 'A',
        perms: [hap.Perms.READ, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.Amperes.UUID = 'E863F126-079E-48FF-8F27-9C2605A29F52';

  // ValvePosition
  Characteristic.ValvePosition = class extends Characteristic {
    constructor() {
      super('Valve Position', 'E863F12E-079E-48FF-8F27-9C2605A29F52');
      this.setProps({
        format: hap.Formats.UINT8,
        unit: hap.Units.PERCENTAGE,
        perms: [hap.Perms.READ, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.ValvePosition.UUID = 'E863F12E-079E-48FF-8F27-9C2605A29F52';

  // ProgramCommand
  Characteristic.ProgramCommand = class extends Characteristic {
    constructor() {
      super('Program Command', 'E863F12C-079E-48FF-8F27-9C2605A29F52');
      this.setProps({
        format: hap.Formats.DATA,
        perms: [hap.Perms.WRITE],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.ProgramCommand.UUID = 'E863F12C-079E-48FF-8F27-9C2605A29F52';

  // ProgramData
  Characteristic.ProgramData = class extends Characteristic {
    constructor() {
      super('Program Data', 'E863F12F-079E-48FF-8F27-9C2605A29F52');
      this.setProps({
        format: hap.Formats.DATA,
        perms: [hap.Perms.READ, hap.Perms.NOTIFY],
      });
      this.value = this.getDefaultValue();
    }
  };
  Characteristic.ProgramData.UUID = 'E863F12F-079E-48FF-8F27-9C2605A29F52';

  /*
   * Service.Outlet (extended)
   */
  Service.Outlet = class extends Service {
    constructor(displayName, subtype) {
      super(displayName, '00000047-0000-1000-8000-0026BB765291', subtype);

      // Required Characteristics
      this.addCharacteristic(Characteristic.On);
      this.addCharacteristic(Characteristic.OutletInUse);

      // Optional Characteristics EVE
      this.addOptionalCharacteristic(Characteristic.CurrentConsumption);
      this.addOptionalCharacteristic(Characteristic.TotalConsumption);
      this.addOptionalCharacteristic(Characteristic.Volts);
      this.addOptionalCharacteristic(Characteristic.Amperes);

      // Optional Characteristics
      this.addOptionalCharacteristic(Characteristic.Name);
    }
  };
  Service.Outlet.UUID = '00000047-0000-1000-8000-0026BB765291';

  /*
   * Service.Thermostat (extended)
   */
  Service.Thermostat = class extends Service {
    constructor(displayName, subtype) {
      super(displayName, '0000004A-0000-1000-8000-0026BB765291', subtype);

      // Required Characteristics
      this.addCharacteristic(Characteristic.CurrentHeatingCoolingState);
      this.addCharacteristic(Characteristic.TargetHeatingCoolingState);
      this.addCharacteristic(Characteristic.CurrentTemperature);
      this.addCharacteristic(Characteristic.TargetTemperature);
      this.addCharacteristic(Characteristic.TemperatureDisplayUnits);

      // Optional Characteristics EVE
      this.addOptionalCharacteristic(Characteristic.ValvePosition);
      this.addOptionalCharacteristic(Characteristic.ProgramCommand);
      this.addOptionalCharacteristic(Characteristic.ProgramData);

      // Optional Characteristics
      this.addOptionalCharacteristic(Characteristic.CurrentRelativeHumidity);
      this.addOptionalCharacteristic(Characteristic.TargetRelativeHumidity);
      this.addOptionalCharacteristic(Characteristic.CoolingThresholdTemperature);
      this.addOptionalCharacteristic(Characteristic.HeatingThresholdTemperature);
      this.addOptionalCharacteristic(Characteristic.Name);
    }
  };
  Service.Thermostat.UUID = '0000004A-0000-1000-8000-0026BB765291';

  /*
   * Service.ContactSensor (extended)
   */
  Service.ContactSensor = class extends Service {
    constructor(displayName, subtype) {
      super(displayName, '00000080-0000-1000-8000-0026BB765291', subtype);

      // Required Characteristics
      this.addCharacteristic(Characteristic.ContactSensorState);

      // Optional Characteristics EVE
      this.addOptionalCharacteristic(Characteristic.TimesOpened);
      this.addOptionalCharacteristic(Characteristic.OpenDuration);
      this.addOptionalCharacteristic(Characteristic.ClosedDuration);
      this.addOptionalCharacteristic(Characteristic.LastActivation);

      // Optional Characteristics CUSTOM
      this.addOptionalCharacteristic(Characteristic.Caller);
      this.addOptionalCharacteristic(Characteristic.Called);

      // Optional Characteristics
      this.addOptionalCharacteristic(Characteristic.StatusActive);
      this.addOptionalCharacteristic(Characteristic.StatusFault);
      this.addOptionalCharacteristic(Characteristic.StatusTampered);
      this.addOptionalCharacteristic(Characteristic.StatusLowBattery);
      this.addOptionalCharacteristic(Characteristic.Name);
    }
  };
  Service.ContactSensor.UUID = '00000080-0000-1000-8000-0026BB765291';

  /*
   * Service.MotionSensor (extended)
   */
  Service.MotionSensor = class extends Service {
    constructor(displayName, subtype) {
      super(displayName, '00000085-0000-1000-8000-0026BB765291', subtype);

      // Required Characteristics
      this.addCharacteristic(Characteristic.MotionDetected);

      // Optional Characteristics EVE
      this.addOptionalCharacteristic(Characteristic.LastActivation);

      // Optional Characteristics
      this.addOptionalCharacteristic(Characteristic.StatusActive);
      this.addOptionalCharacteristic(Characteristic.StatusFault);
      this.addOptionalCharacteristic(Characteristic.StatusTampered);
      this.addOptionalCharacteristic(Characteristic.StatusLowBattery);
      this.addOptionalCharacteristic(Characteristic.Name);
    }
  };
  Service.MotionSensor.UUID = '00000085-0000-1000-8000-0026BB765291';
};
