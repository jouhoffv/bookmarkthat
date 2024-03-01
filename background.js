async function saveUrl(url) {
    const { bookmarkFolderId } = await chrome.storage.sync.get("bookmarkFolderId");
    await chrome.bookmarks.create({
      parentId: bookmarkFolderId,
      title: url,
      url: url,
    });
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "saveUrl") {
      saveUrl(request.url);
    }
  });
  