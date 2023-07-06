import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = []
  private apiKey:string = 'ZmIlPJrXehwrv6yFKNDp1fWT5r70ibu8';
  constructor(private http:HttpClient) { }

  get tagsHistory():string[]{
    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
  }

  searchTag(tag:string):void{
    if(tag.length===0)return;

    this.organizeHistory(tag);

    this.http.get('http://api.giphy.com/v1/gifs/trending?api_key=ZmIlPJrXehwrv6yFKNDp1fWT5r70ibu8&q=valorant&limit=10');
    // const resp = await fetch('http://api.giphy.com/v1/gifs/trending?api_key=ZmIlPJrXehwrv6yFKNDp1fWT5r70ibu8&q=valorant&limit=10');
    // const data = await resp.json();
    // console.log(data);

  }



}
