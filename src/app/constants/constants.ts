export class AppConstants {
  public static JUSTIFY_LIST = [
    'start',
    'center',
    'end',
    'space-between',
    'space-evenly',
    'space-around',
  ];
  public static CROSS_AXIS_ALIGNMENT_LIST = [
    'start',
    'end',
    'center',
    'stretch',
    'baseline',
  ];
  public static MAIN_AXIS_SIZE_LIST = ['max', 'min'];
  public static TEXT_DIRECTION_LIST = ['ltr', 'rtl'];
  public static VERTICAL_DIRECTION_LIST = ['up', 'down'];
  public static WIDGET_SUBMIT_BUTTON = 'WidgetType.submitButton';
  public static WIDGET_LIST = 'WidgetType.list';
  public static WIDGET_INPUT_FIELD = 'WidgetType.inputField';
  public static WIDGET_DROPDOWN = 'WidgetType.Dropdown';
  public static WIDGET_CALENDAR = 'WidgetType.calender';
  public static WIDGET_CHECKBOX = 'WidgetType.checkbox';
  public static WIDGET_ROW = 'WidgetType.row';
  public static WIDGET_BUTTON = 'WidgetType.button';
  public static WIDGET_ICON = 'WidgetType.icon';
  public static WIDGET_TEXT = 'WidgetType.textView';
  public static WIDGET_CONTAINER = 'WidgetType.container';
  public static WIDGET_TEXT_VIEW = 'WidgetType.textView';
  public static WIDGET_CENTER = 'WidgetType.center';
  public static WIDGET_COLUMN = 'WidgetType.column';

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

  public static CLICKABLE_CONFIGURATION = [
    // {
    //   name: 'Call API',
    //   value: 'ClickableConfigurationType.callApi',
    // },
    {
      name: 'Redirect',
      value: 'ClickableConfigurationType.redirect',
    },
    // {
    //   name: 'Callback',
    //   value: 'ClickableConfigurationType.callBack',
    // },
  ];
}
