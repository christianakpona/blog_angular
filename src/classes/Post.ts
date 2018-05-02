export class Post {
    private _title: string;
    private _content: string;
    private _loveIts: number;
    private _created_at: Date;


  constructor(title: string, content: string, loveIts: number, created_at: Date) {
    this._title = title;
    this._content = content;
    this._loveIts = loveIts;
    this._created_at = created_at;
  }
}
