import { AppConstants } from '../constants/constants';
import { WidgetModel } from './widget.model';

export class ScreenModel {
  public screen_name?: string;
  public screen_id?: number;
  public screenPages: ScreenPages = new ScreenPages('', []);
  public appBarActions: WidgetModel[] = [];
  constructor({
    screen_name,
    screen_id,
  }: {
    screen_name?: string;
    screen_id?: number;
  }) {
    this.screen_name = screen_name;
    this.screen_id = screen_id;
  }
}

export class ScreenPages {
  constructor(
    public page_name: string,
    public fields: Array<WidgetModel>,
    public isScrollable: boolean = true
  ) {}
}
