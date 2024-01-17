export type ApiErrorCodeType =
  | 'CLIENTERROR'
  | 'AUTHERROR'
  | 'NOTALLOWERROR'
  | 'NOTFOUNDERROR'
  | 'TIMEOUTERROR'
  | 'SERVERERROR'
  | 'MAINTENANCEERROR';

type ApiErrorStatusCode = '400' | '401' | '403' | '404' | '408' | '500' | '503';

type ErrorMapType = Record<ApiErrorStatusCode, ApiErrorCodeType>;

// NOTE: アルファベット順（キー名基準）に記述しています
const ErrorTypeMap: ErrorMapType = {
  '400': 'CLIENTERROR',
  '401': 'AUTHERROR',
  '403': 'NOTALLOWERROR',
  '404': 'NOTFOUNDERROR',
  '408': 'TIMEOUTERROR',
  '500': 'SERVERERROR',
  '503': 'MAINTENANCEERROR',
};

export const getApiErrorCodeType = (
  errorPatarn: ApiErrorStatusCode,
): ApiErrorCodeType => ErrorTypeMap[errorPatarn];

export const getApiErrorMessageCode = (
  errorMessage: string,
): ApiErrorCodeType | null => {
  switch (errorMessage) {
    case 'CLIENTERROR':
      return 'CLIENTERROR';
    case 'AUTHERROR':
      return 'AUTHERROR';
    case 'NOTALLOWERROR':
      return 'NOTALLOWERROR';
    case 'NOTFOUNDERROR':
      return 'NOTFOUNDERROR';
    case 'TIMEOUTERROR':
      return 'TIMEOUTERROR';
    case 'SERVERERROR':
      return 'SERVERERROR';
    case 'MAINTENANCEERROR':
      return 'MAINTENANCEERROR';
    default:
      return null;
  }
};
