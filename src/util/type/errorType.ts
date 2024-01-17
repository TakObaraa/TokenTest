export type ErrorType =
  | 'CLIENTERROR'
  | 'AUTHERROR'
  | 'NOTALLOWERROR'
  | 'NOTFOUNDERROR'
  | 'TIMEOUTERROR'
  | 'SERVERERROR'
  | 'MAINTENANCEERROR'
  | 'CSRFERROR'
  | 'FORCEUPDATEERROR'
  | 'NETWORKERROR';

type ErrorPatarn =
  | '400'
  | '401'
  | '403'
  | '404'
  | '408'
  | '500'
  | '503'
  | 'csrf'
  | 'forceUpdate'
  | 'network';

type ErrorMapType = Record<ErrorPatarn, ErrorType>;

// NOTE: アルファベット順（キー名基準）に記述しています
const ErrorTypeMap: ErrorMapType = {
  '400': 'CLIENTERROR',
  '401': 'AUTHERROR',
  '403': 'NOTALLOWERROR',
  '404': 'NOTFOUNDERROR',
  '408': 'TIMEOUTERROR',
  '500': 'SERVERERROR',
  '503': 'MAINTENANCEERROR',
  csrf: 'CSRFERROR',
  forceUpdate: 'FORCEUPDATEERROR',
  network: 'NETWORKERROR',
};

export const getErrorType = (errorPatarn: ErrorPatarn): ErrorType =>
  ErrorTypeMap[errorPatarn];
