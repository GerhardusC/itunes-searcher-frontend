//I am rewriting the removeFavourite function here for testing.
const removeFavourite = (state, action) => {
  for (let i = 0; i < state.data.length; i++) {
    if (
      action.payload.wrapperType === "track" &&
      state.data[i].trackViewUrl === action.payload.trackViewUrl
    ) {
      state.data.splice(i, 1);
      state.currentIds.splice(
        state.currentIds.indexOf(action.payload.trackViewUrl),
        1
      );
      return true;
    }
    if (
      action.payload.wrapperType === "audiobook" &&
      state.data[i].collectionViewUrl === action.payload.collectionViewUrl
    ) {
      state.data.splice(i, 1);
      state.currentIds.splice(
        state.currentIds.indexOf(action.payload.collectionViewUrl),
        1
      );
      return true;
    }
  }
  return false;
};
//Some test state data.
const testState = {
  data: [
    {
      wrapperType: "track",
      kind: "song",
      artistId: 211127908,
      collectionId: 1038709962,
      trackId: 1038710686,
      artistName: "A Skylit Drive",
      collectionName: "ASD",
      trackName: "I'll Sleep When I'm Dead",
      collectionCensoredName: "ASD",
      trackCensoredName: "I'll Sleep When I'm Dead",
      artistViewUrl:
        "https://music.apple.com/us/artist/a-skylit-drive/211127908?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/ill-sleep-when-im-dead/1038709962?i=1038710686&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/ill-sleep-when-im-dead/1038709962?i=1038710686&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f4/c4/ef/f4c4ef6a-37a0-5f7f-252f-24482dbfad63/mzaf_794636454381925803.plus.aac.p.m4a",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: "2015-10-09T12:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 11,
      trackNumber: 9,
      trackTimeMillis: 207543,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Rock",
      isStreamable: true,
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 211127908,
      collectionId: 1038709962,
      trackId: 1038709983,
      artistName: "A Skylit Drive",
      collectionName: "ASD",
      trackName: "Self/Less",
      collectionCensoredName: "ASD",
      trackCensoredName: "Self/Less",
      artistViewUrl:
        "https://music.apple.com/us/artist/a-skylit-drive/211127908?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/self-less/1038709962?i=1038709983&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/self-less/1038709962?i=1038709983&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/77/fb/05/77fb053b-1fd9-c0f4-470a-158e2d20317c/mzaf_16313308592481276381.plus.aac.p.m4a",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: "2015-10-09T12:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 11,
      trackNumber: 2,
      trackTimeMillis: 169675,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Rock",
      isStreamable: true,
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 211127908,
      collectionId: 1038709962,
      trackId: 1038709977,
      artistName: "A Skylit Drive",
      collectionName: "ASD",
      trackName: "Bring Me a War",
      collectionCensoredName: "ASD",
      trackCensoredName: "Bring Me a War",
      artistViewUrl:
        "https://music.apple.com/us/artist/a-skylit-drive/211127908?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/bring-me-a-war/1038709962?i=1038709977&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/bring-me-a-war/1038709962?i=1038709977&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/48/c1/b8/48c1b885-cf02-585d-fb2e-cc146136949d/mzaf_4992728683196952044.plus.aac.p.m4a",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: "2015-10-09T12:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 11,
      trackNumber: 1,
      trackTimeMillis: 222062,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Rock",
      isStreamable: true,
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 211127908,
      collectionId: 1038709962,
      trackId: 1038710557,
      artistName: "A Skylit Drive",
      collectionName: "ASD",
      trackName: "Falling Apart In a (Crow)ded Room",
      collectionCensoredName: "ASD",
      trackCensoredName: "Falling Apart In a (Crow)ded Room",
      artistViewUrl:
        "https://music.apple.com/us/artist/a-skylit-drive/211127908?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/falling-apart-in-a-crow-ded-room/1038709962?i=1038710557&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/falling-apart-in-a-crow-ded-room/1038709962?i=1038710557&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/04/e3/e9/04e3e9bd-33c3-7d52-44aa-233c3ff187cf/mzaf_17459505988428606327.plus.aac.p.m4a",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: "2015-10-09T12:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 11,
      trackNumber: 3,
      trackTimeMillis: 227455,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Rock",
      isStreamable: true,
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 211127908,
      collectionId: 1038709962,
      trackId: 1038710563,
      artistName: "A Skylit Drive",
      collectionName: "ASD",
      trackName: "Shock My Heart",
      collectionCensoredName: "ASD",
      trackCensoredName: "Shock My Heart",
      artistViewUrl:
        "https://music.apple.com/us/artist/a-skylit-drive/211127908?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/shock-my-heart/1038709962?i=1038710563&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/shock-my-heart/1038709962?i=1038710563&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/56/90/0e/56900e20-46f6-0235-39a2-eaa2ec189e82/mzaf_5378908860938797703.plus.aac.p.m4a",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: "2015-10-09T12:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 11,
      trackNumber: 4,
      trackTimeMillis: 240174,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Rock",
      isStreamable: true,
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 211127908,
      collectionId: 1038709962,
      trackId: 1038710571,
      artistName: "A Skylit Drive",
      collectionName: "ASD",
      trackName: "Risk It All",
      collectionCensoredName: "ASD",
      trackCensoredName: "Risk It All",
      artistViewUrl:
        "https://music.apple.com/us/artist/a-skylit-drive/211127908?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/risk-it-all/1038709962?i=1038710571&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/risk-it-all/1038709962?i=1038710571&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/5a/29/17/5a29170f-4d73-8b64-5634-2fc3f5c1933b/mzaf_13159899648770744374.plus.aac.p.m4a",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: "2015-10-09T12:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 11,
      trackNumber: 5,
      trackTimeMillis: 194042,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Rock",
      isStreamable: true,
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 211127908,
      collectionId: 1038709962,
      trackId: 1038710577,
      artistName: "A Skylit Drive",
      collectionName: "ASD",
      trackName: "Running In Circles",
      collectionCensoredName: "ASD",
      trackCensoredName: "Running In Circles",
      artistViewUrl:
        "https://music.apple.com/us/artist/a-skylit-drive/211127908?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/running-in-circles/1038709962?i=1038710577&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/running-in-circles/1038709962?i=1038710577&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4d/c3/15/4dc31558-dcff-b92f-7e8d-3eef3c7b723a/mzaf_11930718539939241601.plus.aac.p.m4a",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/21/ec/8b/21ec8bbd-321d-ecfb-4bcf-846a509c769e/605491100200.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: "2015-10-09T12:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 11,
      trackNumber: 6,
      trackTimeMillis: 221058,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Rock",
      isStreamable: true,
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 998366919,
      collectionId: 1453884809,
      trackId: 1453884929,
      artistName: "the Marine Rapper",
      collectionName: "HearTMRica",
      trackName: "Bullet for My Valentine",
      collectionCensoredName: "HearTMRica",
      trackCensoredName: "Bullet for My Valentine",
      artistViewUrl:
        "https://music.apple.com/us/artist/the-marine-rapper/998366919?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/bullet-for-my-valentine/1453884809?i=1453884929&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/bullet-for-my-valentine/1453884809?i=1453884929&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/94/94/6c/94946ca1-ba4e-428c-22a8-5613b7eb571e/mzaf_17448536168720951280.plus.aac.p.m4a",
      artworkUrl30:
        "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/96/f0/be/96f0bea9-56c0-4efe-0095-43debfe56227/859730550053_cover.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/96/f0/be/96f0bea9-56c0-4efe-0095-43debfe56227/859730550053_cover.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/96/f0/be/96f0bea9-56c0-4efe-0095-43debfe56227/859730550053_cover.jpg/100x100bb.jpg",
      collectionPrice: 8.91,
      trackPrice: 0.99,
      releaseDate: "2019-02-11T12:00:00Z",
      collectionExplicitness: "explicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 9,
      trackNumber: 4,
      trackTimeMillis: 216227,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Hip-Hop/Rap",
      isStreamable: true,
    },
    {
      wrapperType: "track",
      kind: "podcast",
      collectionId: 370782812,
      trackId: 370782812,
      artistName: "Ashfaque Ahsan",
      collectionName: "Bullet For My Valentine",
      trackName: "Bullet For My Valentine",
      collectionCensoredName: "Bullet For My Valentine",
      trackCensoredName: "Bullet For My Valentine",
      collectionViewUrl:
        "https://podcasts.apple.com/us/podcast/bullet-for-my-valentine/id370782812?uo=4",
      feedUrl: "https://ashfaque619.podomatic.com/rss2.xml",
      trackViewUrl:
        "https://podcasts.apple.com/us/podcast/bullet-for-my-valentine/id370782812?uo=4",
      artworkUrl30:
        "https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/cc/6e/d4/cc6ed4f0-b4d5-0ccc-3ced-2f38f55536c5/mza_14632634803160135488.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/cc/6e/d4/cc6ed4f0-b4d5-0ccc-3ced-2f38f55536c5/mza_14632634803160135488.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/cc/6e/d4/cc6ed4f0-b4d5-0ccc-3ced-2f38f55536c5/mza_14632634803160135488.jpg/100x100bb.jpg",
      collectionPrice: 0,
      trackPrice: 0,
      collectionHdPrice: 0,
      releaseDate: "2011-06-30T08:55:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "cleaned",
      trackCount: 4,
      trackTimeMillis: 204,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Music",
      contentAdvisoryRating: "Clean",
      artworkUrl600:
        "https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/cc/6e/d4/cc6ed4f0-b4d5-0ccc-3ced-2f38f55536c5/mza_14632634803160135488.jpg/600x600bb.jpg",
      genreIds: ["1310", "26"],
      genres: ["Music", "Podcasts"],
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 50077521,
      collectionId: 1660290229,
      trackId: 1660290970,
      artistName: "Bullet for My Valentine",
      collectionName: "Bullet For My Valentine (Deluxe)",
      trackName: "Rainbow Veins",
      collectionCensoredName: "Bullet For My Valentine (Deluxe)",
      trackCensoredName: "Rainbow Veins",
      artistViewUrl:
        "https://music.apple.com/us/artist/bullet-for-my-valentine/50077521?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/rainbow-veins/1660290229?i=1660290970&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/rainbow-veins/1660290229?i=1660290970&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/66/85/38/668538fc-43ea-54c4-f4f5-b466708bfddb/mzaf_3602614046449785573.plus.aac.p.m4a",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/ee/77/4b/ee774bbe-4099-9a31-a6e4-188c65761eb7/5400863114688_cover.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/ee/77/4b/ee774bbe-4099-9a31-a6e4-188c65761eb7/5400863114688_cover.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/ee/77/4b/ee774bbe-4099-9a31-a6e4-188c65761eb7/5400863114688_cover.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: "2004-11-15T12:00:00Z",
      collectionExplicitness: "explicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 7,
      trackTimeMillis: 298186,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Rock",
      isStreamable: true,
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 50077521,
      collectionId: 1660290229,
      trackId: 1660291737,
      artistName: "Bullet for My Valentine",
      collectionName: "Bullet For My Valentine (Deluxe)",
      trackName: "No More Tears To Cry",
      collectionCensoredName: "Bullet For My Valentine (Deluxe)",
      trackCensoredName: "No More Tears To Cry",
      artistViewUrl:
        "https://music.apple.com/us/artist/bullet-for-my-valentine/50077521?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/no-more-tears-to-cry/1660290229?i=1660291737&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/no-more-tears-to-cry/1660290229?i=1660291737&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/75/ac/3a/75ac3a3f-112f-dd8b-3460-6b6027dc1af2/mzaf_14675771965341862429.plus.aac.p.m4a",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/ee/77/4b/ee774bbe-4099-9a31-a6e4-188c65761eb7/5400863114688_cover.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/ee/77/4b/ee774bbe-4099-9a31-a6e4-188c65761eb7/5400863114688_cover.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/ee/77/4b/ee774bbe-4099-9a31-a6e4-188c65761eb7/5400863114688_cover.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: "2022-05-08T12:00:00Z",
      collectionExplicitness: "explicit",
      trackExplicitness: "explicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 13,
      trackTimeMillis: 221433,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Rock",
      contentAdvisoryRating: "Explicit",
      isStreamable: true,
    },
  ],
  currentIds: [
    "https://music.apple.com/us/album/ill-sleep-when-im-dead/1038709962?i=1038710686&uo=4",
    "https://music.apple.com/us/album/self-less/1038709962?i=1038709983&uo=4",
    "https://music.apple.com/us/album/bring-me-a-war/1038709962?i=1038709977&uo=4",
    "https://music.apple.com/us/album/falling-apart-in-a-crow-ded-room/1038709962?i=1038710557&uo=4",
    "https://music.apple.com/us/album/shock-my-heart/1038709962?i=1038710563&uo=4",
    "https://music.apple.com/us/album/risk-it-all/1038709962?i=1038710571&uo=4",
    "https://music.apple.com/us/album/running-in-circles/1038709962?i=1038710577&uo=4",
    "https://music.apple.com/us/album/bullet-for-my-valentine/1453884809?i=1453884929&uo=4",
    "https://podcasts.apple.com/us/podcast/bullet-for-my-valentine/id370782812?uo=4",
    "https://music.apple.com/us/album/rainbow-veins/1660290229?i=1660290970&uo=4",
    "https://music.apple.com/us/album/no-more-tears-to-cry/1660290229?i=1660291737&uo=4",
  ],
};
//Some test data that should return a true value when run through the function.
const testTrueAction = {
  payload: {
    wrapperType: "track",
    kind: "song",
    artistId: 998366919,
    collectionId: 1453884809,
    trackId: 1453884929,
    artistName: "the Marine Rapper",
    collectionName: "HearTMRica",
    trackName: "Bullet for My Valentine",
    collectionCensoredName: "HearTMRica",
    trackCensoredName: "Bullet for My Valentine",
    artistViewUrl:
      "https://music.apple.com/us/artist/the-marine-rapper/998366919?uo=4",
    collectionViewUrl:
      "https://music.apple.com/us/album/bullet-for-my-valentine/1453884809?i=1453884929&uo=4",
    trackViewUrl:
      "https://music.apple.com/us/album/bullet-for-my-valentine/1453884809?i=1453884929&uo=4",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/94/94/6c/94946ca1-ba4e-428c-22a8-5613b7eb571e/mzaf_17448536168720951280.plus.aac.p.m4a",
    artworkUrl30:
      "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/96/f0/be/96f0bea9-56c0-4efe-0095-43debfe56227/859730550053_cover.jpg/30x30bb.jpg",
    artworkUrl60:
      "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/96/f0/be/96f0bea9-56c0-4efe-0095-43debfe56227/859730550053_cover.jpg/60x60bb.jpg",
    artworkUrl100:
      "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/96/f0/be/96f0bea9-56c0-4efe-0095-43debfe56227/859730550053_cover.jpg/100x100bb.jpg",
    collectionPrice: 8.91,
    trackPrice: 0.99,
    releaseDate: "2019-02-11T12:00:00Z",
    collectionExplicitness: "explicit",
    trackExplicitness: "notExplicit",
    discCount: 1,
    discNumber: 1,
    trackCount: 9,
    trackNumber: 4,
    trackTimeMillis: 216227,
    country: "USA",
    currency: "USD",
    primaryGenreName: "Hip-Hop/Rap",
    isStreamable: true,
  },
};
//Some test data that should return a false value when run through the function.
const testFalseAction = {
  payload: {
    wrapperType: "track",
    kind: "song",
    artistId: 50077521,
    collectionId: 1660290229,
    trackId: 1660290764,
    artistName: "Bullet for My Valentine",
    collectionName: "Bullet For My Valentine (Deluxe)",
    trackName: "Can't Escape the Waves",
    collectionCensoredName: "Bullet For My Valentine (Deluxe)",
    trackCensoredName: "Can't Escape the Waves",
    artistViewUrl:
      "https://music.apple.com/us/artist/bullet-for-my-valentine/50077521?uo=4",
    collectionViewUrl:
      "https://music.apple.com/us/album/cant-escape-the-waves/1660290229?i=1660290764&uo=4",
    trackViewUrl:
      "https://music.apple.com/us/album/cant-escape-the-waves/1660290229?i=1660290764&uo=4",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/1b/4b/94/1b4b9431-f55f-d791-f934-89c5e82c2b48/mzaf_5357011765389107810.plus.aac.p.m4a",
    artworkUrl30:
      "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/ee/77/4b/ee774bbe-4099-9a31-a6e4-188c65761eb7/5400863114688_cover.jpg/30x30bb.jpg",
    artworkUrl60:
      "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/ee/77/4b/ee774bbe-4099-9a31-a6e4-188c65761eb7/5400863114688_cover.jpg/60x60bb.jpg",
    artworkUrl100:
      "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/ee/77/4b/ee774bbe-4099-9a31-a6e4-188c65761eb7/5400863114688_cover.jpg/100x100bb.jpg",
    collectionPrice: 9.99,
    trackPrice: 1.29,
    releaseDate: "2004-11-15T12:00:00Z",
    collectionExplicitness: "explicit",
    trackExplicitness: "notExplicit",
    discCount: 1,
    discNumber: 1,
    trackCount: 15,
    trackNumber: 5,
    trackTimeMillis: 275562,
    country: "USA",
    currency: "USD",
    primaryGenreName: "Rock",
    isStreamable: true,
  },
};
//Currently only testing whether a track is or isn't found in a test data set.
test("function removes ID", () => {
  expect(removeFavourite(testState, testTrueAction)).toBe(true);
  expect(removeFavourite(testState, testFalseAction)).toBe(false);
});
