export class AppConstants {
  public static WIDGET_SUBMIT_BUTTON = 'WidgetType.submitButton';
  public static WIDGET_LIST = 'WidgetType.list';
  public static WIDGET_INPUT_FIELD = 'WidgetType.inputField';
  public static WIDGET_DROPDOWN = 'WidgetType.Dropdown';

  public static JUSTIFY_LIST = [
    'start', 'end', 'space-between', 'space-evenly', 'space-around',  
  ];
  public static WIDGET_CALENDAR = 'WidgetType.calender';
  public static WIDGET_CHECKBOX = 'WidgetType.checkbox';
  public static WIDGET_ROW = 'WidgetType.row';

  public static LOOKUP_LISTS = [
    {
      lookupListKey: 'veiw.payment.methods.screens',
      lookupIdKey: 'paymentMethodCode',
      lookupTextKey: 'paymentMethodName',
      displayValue: 'Payment Methods',
    },
    {
      lookupListKey: 'get.topup.list.values',
      lookupIdKey: 'topupToId',
      lookupTextKey: 'topuptoName',
      displayValue: 'Get Topup',
    },
    {
      lookupListKey: 'cities.list.lookup',
      lookupIdKey: 'CITY_ID',
      lookupTextKey: 'CITY_NAME',
      displayValue: 'Cities',
    },
    {
      lookupListKey: 'allowed.contribution.frequencies',
      lookupIdKey: '',
      lookupTextKey: '',
      displayValue: 'Allowed Contribution Frequencies',
    },
    {
      lookupListKey: 'allowed.wining.turn.decisions',
      lookupIdKey: '',
      lookupTextKey: '',
      displayValue: 'Allowed Winning Turn decisions',
    },
    {
      lookupListKey: 'week.days',
      lookupIdKey: '',
      lookupTextKey: '',
      displayValue: 'Week Days',
    },
    {
      lookupListKey: 'month.days',
      lookupIdKey: '',
      lookupTextKey: '',
      displayValue: 'Month Days',
    },
  ];
}
