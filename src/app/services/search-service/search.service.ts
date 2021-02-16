import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../constants/constants';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private http: HttpClient) {}
  pinnedReposApiUrl: string = 'https://gh-pinned-repos-5l2i19um3.vercel.app';
  gitHubApiUrl: string = 'https://api.github.com';
  constant: any = Constants;
  pageNumber: number = 1;

  async searchGithubUsers(name: string, instance: any, isNextPage: boolean) {
    const operation = this.constant.OPERATION;
    const searchOn = this.constant.SEARCHON;
    const perPage = this.constant.PERPAGE;

    (instance.isLoading = true), (instance.isError = false);
    this.pageNumber = isNextPage ? this.pageNumber + 1 : 1;
    instance.profileData = isNextPage ? instance.profileData : [];

    const query = `${this.gitHubApiUrl}${operation}${searchOn}?q=${name}&&per_page=${perPage}&&page=${this.pageNumber}`;

    await this.http
      .get<any>(query)
      .toPromise()
      .then((res) => {
        res.items.forEach(async (profile: { url: string }) => {
          const userInfo = await this.getUserInfo(profile.url, instance);
          instance.profileData.push(userInfo);
        });
        instance.isLoading = false;
      })
      .catch((err) => {
        instance.isError = true;
      });
  }

  async getUserInfo(profileUrl: string, instance: any) {
    let profileData: {
      handle: any;
      name: any;
      bio: any;
      img: any;
      followers: any;
      repos: any;
      repos_url: any;
      html_url: any;
    };
    await this.http
      .get<any>(profileUrl)
      .toPromise()
      .then((profile) => {
        const profileInfo = {
          handle: profile.login,
          name: profile.name,
          bio: profile.bio,
          img: profile.avatar_url,
          followers: profile.followers,
          repos: profile.public_repos,
          repos_url: profile.repos_url,
          html_url: profile.html_url,
        };
        profileData = profileInfo;
      })
      .catch((err) => {
        instance.isError = true;
      });

    return profileData;
  }

  async getUserPinnedRepos(username: string) {
    const query = `${this.pinnedReposApiUrl}/?username=${username}`;
    let pinnedReposData: any;
    await this.http
      .get<any>(query)
      .toPromise()
      .then((pinnedRepos) => {
        pinnedReposData = pinnedRepos;
      });
    return pinnedReposData;
  }
}
