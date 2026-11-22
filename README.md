# 암전 — GitHub Pages + Jekyll 영화 비평 사이트

## 1. 처음 공개하기 (컴퓨터에 프로그램 설치 불필요)

1. GitHub 로그인 후 저장소 `사용자이름.github.io`를 만듭니다(Public 권장).
2. 이 ZIP의 압축을 풀고, **`film-jekyll-site` 폴더 자체가 아니라 폴더 안의 파일과 폴더를** 저장소 최상위에 올립니다. `.github` 폴더는 쓰지 않습니다.
3. 저장소에서 `Settings → Pages → Build and deployment → Source: Deploy from a branch`를 선택합니다.
4. `Branch: main`, `Folder: / (root)`로 설정하고 Save를 누릅니다.
5. `https://사용자이름.github.io`로 접속합니다. 배포에 몇 분 걸릴 수 있으며, 문제가 생기면 Actions 탭을 확인합니다.

기존 `index.html`이 있는 저장소라면 새 `index.html`로 교체하세요. **`.nojekyll` 파일이 있다면 삭제**해야 Jekyll 처리가 됩니다.

## 2. 새 글 작성 (Markdown)

1. 저장소의 `_posts` 폴더로 이동합니다.
2. `Add file → Create new file`을 선택합니다.
3. 파일명을 `2026-11-22-hula-girls.md`처럼 `YYYY-MM-DD-영문-글이름.md` 형식으로 지정합니다.
4. 다음 내용을 붙여넣고 실제 글을 작성합니다.

```markdown
---
title: "익숙한 이야기에도 감동하는 이유"
date: 2026-11-22 12:00:00 +0900
author: "암전"
section: criticism
section_label: "비평"
film: "훌라걸스"
year: 2006
director: "이상일"
tone: amber
---

## 첫 번째 소제목

여기부터 실제 비평을 작성합니다.

두 번째 문단은 빈 줄을 하나 넣어 구분합니다.
```

5. `Commit changes`를 누르면 Jekyll이 게시글 상세 페이지를 만들고, 홈페이지 카드·해당 메뉴·영화별 글 목록·필자별 글 목록을 자동 갱신합니다.

**중요:** 현재 날짜보다 미래로 설정된 `date`의 게시글은 기본적으로 나타나지 않습니다. `date`는 실제 게시일로 입력하세요.

## 3. 글 분류

| 메뉴 | section | section_label |
|---|---|---|
| 특집기획 | `feature` | `특집기획` |
| 비평 | `criticism` | `비평` |
| 칼럼·에세이 | `essay` | `칼럼·에세이` |
| 리뷰 | `review` | `리뷰` |

`영화` 메뉴는 `film` 값으로 자동 그룹화합니다. `필자` 메뉴는 `author` 값으로 자동 그룹화합니다. 표기법이 서로 다르면 별도 항목으로 분류됩니다.

`tone`: `amber`, `violet`, `green`, `blue`, `olive`, `teal`, `red`, `gray` 중 선택합니다.

## 4. 주요 파일

- `_config.yml`: 사이트 이름·설명·주소 설정
- `index.html`: 홈페이지 카드 목록(Jekyll 자동 생성)
- `_layouts/default.html`: 로고·메뉴·푸터
- `_layouts/post.html`: 게시글 상세 화면
- `_posts/*.md`: 개별 영화 비평 원고
- `films/index.html`: 영화별 모아보기
- `authors/index.html`: 필자별 모아보기
- `assets/css/style.css`: 디자인
- `assets/js/site.js`: 메뉴 필터

## 5. 자주 묻는 질문

**글을 쓰면 자동으로 뜨나요?** 네. 올바른 파일명, 날짜, YAML 머리말을 사용하고 GitHub Pages 빌드가 성공하면 자동으로 목록에 반영됩니다.

**영화 카드 사진은 없나요?** 원본 참고 이미지처럼 단색 그라데이션 카드를 사용했습니다. 영화 스틸·포스터 저작권 문제를 피하도록 기본 템플릿에는 넣지 않았습니다.

**사이트 주소가 `사용자이름.github.io/저장소명`이라면?** `_config.yml`의 `baseurl`을 `/저장소명`으로 바꾸세요. 사용자 사이트 `사용자이름.github.io` 저장소라면 빈 문자열 유지.

**샘플 글을 지우려면?** `_posts` 폴더에 있는 날짜가 붙은 샘플 `.md` 파일을 삭제하고 자신의 글을 넣습니다.

**로고와 제목을 바꾸려면?** `_config.yml`의 `title` 및 `description`, `_layouts/default.html`의 `<span>암</span>`을 수정합니다.

## 확인 참고

- https://docs.github.com/ko/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll
