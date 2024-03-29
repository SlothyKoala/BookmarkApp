import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bookmark } from '../Models/bookmark.interface';

@Injectable({
  providedIn: 'root'
})

export class BookmarkService {
  private readonly baseUrl = 'https://localhost:7158/api/bookmark';

  constructor(private http: HttpClient) { }

  getBookmarks(): Observable<Bookmark[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<Bookmark[]>(url);
  }

  getBookmark(bookmarkID: number): Observable<Bookmark> {
    const url = `${this.baseUrl}/${bookmarkID}`;
    console.log('Fetching bookmark with ID:', bookmarkID);
    return this.http.get<Bookmark>(url);
  }

  addBookmark(bookmark: Bookmark): Observable<Bookmark> {
    return this.http.post<Bookmark>(this.baseUrl, bookmark);
  }

  updateBookmark(bookmark: Bookmark): Observable<Bookmark> {
    const url = `${this.baseUrl}/${bookmark.bookmarkID}`;
    return this.http.put<Bookmark>(url, bookmark);
  }

  deleteBookmark(bookmarkID: number): Observable<any> {
    console.log('Delete bookmark called with ID:', bookmarkID);
    const url = `${this.baseUrl}/${bookmarkID}`;
    return this.http.delete(url);
  }
}
