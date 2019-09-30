import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import {  PostType, PostStatus, Post, PostResponse } from 'src/app/shared/models/post-response';

const posts: Post[] = [
    {
        id: 1,
        type: PostType.IMAGE,
        status: PostStatus.PUBLISHED,
        images: [{
            thumb: 'https://placeimg.com/600/600/any',
            original: 'https://placeimg.com/1000/1000/any',
            width: 600,
            height: 600
        },{
            thumb: 'https://placeimg.com/600/600/smile',
            original: 'https://placeimg.com/1000/1000/smile',
            width: 600,
            height: 600
        }],
      
        createdAt: 1569286479384,
        updatedAt: 1569286479384,
    },
    {
        id: 2,
        type: PostType.IMAGE,
        status: PostStatus.DRAFTED,
        images: [{
            thumb: 'https://placeimg.com/600/600/any',
            original: 'https://placeimg.com/1000/1000/any',
            width: 600,
            height: 600
        }],
      
        createdAt: 1569286479384,
        updatedAt: 1569286479384,
    },
    {
        id: 3,
        type: PostType.IMAGE,
        status: PostStatus.DRAFTED,
        images: [{
            thumb: 'https://placeimg.com/600/600/any',
            original: 'https://placeimg.com/1000/1000/any',
            width: 600,
            height: 600
        }],
      
        createdAt: 1569286479384,
        updatedAt: 1569286479384,
    }
]

const urls = [
    {
        url: 'https://fakedomain.tnx/post',
        data: {
            name: 'Tung'
        }
    }
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
        const { url, method, headers, body } = req;
        return of(null)
        .pipe(mergeMap(handleRoute))
        .pipe(delay(500))

        function handleRoute() {
            switch (true) {
                case url.match(/\/posts\/\d+$/) && method === 'GET':
                        return getPostbyId(idFromUrl());  // Get one Post by ID
                case url.endsWith('/posts') && method === 'GET':
                        return getAllPost(); // Get all Post
                // case url.endsWith('/posts') && method === 'POST':
                //         const newPost = body
                //         return createNewPost(payload); // Create New Post
                // case url.match(/\/posts\/\d+$/) && method === 'PUT':
                //         const updatePost = body //Edit Exist Post
                //         return editPost(updatePost);
                default:
                    return next.handle(req);
            }
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        } 

        function getAllPost() {
            return of(new HttpResponse({ status: 200, body: posts }));
        }
    
        function getPostbyId(id : any) {
            console.log('Loaded from json : ' + req.url);
            const postRes: PostResponse = {
                resultData: posts[0],
                resultCode: 1,
                errorMessage: '',
                errorDisplay: true
            }
            return of(new HttpResponse({ status: 200, body: postRes }));
        }



       
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};