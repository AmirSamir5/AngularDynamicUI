export class AppConstants {
  public static JUSTIFY_LIST = [
    'start',
    'center',
    'end',
    'spaceBetween',
    'spaceEvenly',
    'spaceAround',
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
  public static WIDGET_IMAGE = 'WidgetType.image';
  public static WIDGET_TEXT = 'WidgetType.textView';
  public static WIDGET_CONTAINER = 'WidgetType.container';
  public static WIDGET_TEXT_VIEW = 'WidgetType.textView';
  public static WIDGET_CENTER = 'WidgetType.center';
  public static WIDGET_COLUMN = 'WidgetType.column';
  public static WIDGET_SCROLLVIEW = 'WidgetType.scrollView';
  public static WIDGET_ICON = 'WidgetType.icon';
  public static WIDGET_EXPANDED = 'WidgetType.expanded';

  public static LOOKUP_LISTS = [
    // {
    //   lookupListKey: 'veiw.payment.methods.screens',
    //   lookupIdKey: 'paymentMethodCode',
    //   lookupTextKey: 'paymentMethodName',
    //   displayValue: 'Payment Methods',
    // },
    // {
    //   lookupListKey: 'get.topup.list.values',
    //   lookupIdKey: 'topupToId',
    //   lookupTextKey: 'topuptoName',
    //   displayValue: 'Get Topup',
    // },
    // {
    //   lookupListKey: 'cities.list.lookup',
    //   lookupIdKey: 'CITY_ID',
    //   lookupTextKey: 'CITY_NAME',
    //   displayValue: 'Cities',
    // },
    // {
    //   lookupListKey: 'allowed.contribution.frequencies',
    //   lookupIdKey: '',
    //   lookupTextKey: '',
    //   displayValue: 'Allowed Contribution Frequencies',
    // },
    {
      lookupListKey: 'allowed.wining.turn.decisions',
      lookupIdKey: 'ID',
      lookupTextKey: 'WINNING',
      displayValue: 'Allowed Winning Turn decisions',
    },
    {
      lookupListKey: 'week.days',
      lookupIdKey: 'ID',
      lookupTextKey: 'NAME',
      displayValue: 'Week Days',
    },
    {
      lookupListKey: 'month.days',
      lookupIdKey: 'ID',
      lookupTextKey: 'NAME',
      displayValue: 'Month Days',
    },
    {
      lookupListKey: 'choosePaymentMethod.list.lookup',
      lookupIdKey: 'paymentMethod_id',
      lookupTextKey: 'paymentMethod_name',
      displayValue: 'Choose Payment Method',
    },
    {
      lookupListKey: 'future.turns.list.lookup',
      lookupIdKey: 'turn_id',
      lookupTextKey: 'turn_name',
      displayValue: 'Future Turns',
    },
    {
      lookupListKey: 'currency.lookup.list',
      lookupIdKey: 'ID',
      lookupTextKey: 'CODE',
      displayValue: 'Currency',
    },
    {
      lookupListKey: 'allowed.contribution.frequencies',
      lookupIdKey: 'ID',
      lookupTextKey: 'CONTRIBUTIONFREQUENCY',
      displayValue: 'Allowed contribution frequencies',
    },
  ];

  public static CLICKABLE_CONFIGURATION = [
    {
      name: 'Call API',
      value: 'ClickableConfigurationType.callApi',
    },
    {
      name: 'Redirect',
      value: 'ClickableConfigurationType.redirect',
    },
    // {
    //   name: 'Callback',
    //   value: 'ClickableConfigurationType.callBack',
    // },
  ];

  public static LIST_DIRECTION = [
    {
      name: 'Horizontal',
      value: 'h',
    },
    {
      name: 'Vertical',
      value: 'v',
    },
  ];

  public static LIST_ICONS = [
    {
      codePoint: '0xf521',
      iconName: 'account_box_rounded',
      fontFamily: 'MaterialIcons',
    },
    {
      codePoint: '0xe047',
      iconName: 'add',
      fontFamily: 'MaterialIcons',
    },
    {
      codePoint: '0xe21a',
      iconName: 'edit',
      fontFamily: 'MaterialIcons',
    },
    {
      codePoint: '0xe567',
      iconName: 'search',
      fontFamily: 'MaterialIcons',
    },
    {
      codePoint: '0xe44f',
      iconName: 'notifications',
      fontFamily: 'MaterialIcons',
    },
    {
      codePoint: '0xe402',
      iconName: 'more_horiz',
      fontFamily: 'MaterialIcons',
    },
    {
      codePoint: '0xe404',
      iconName: 'more_vert',
      fontFamily: 'MaterialIcons',
    },
  ];
}
