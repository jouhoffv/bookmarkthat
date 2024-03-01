async function populateFolderSelect() {
    const tree = await chrome.bookmarks.getTree();
    const folderSelect = document.getElementById("folderSelect");
  
    // Build folder structure dynamically
    // ...
  
    const { bookmarkFolderId } = await chrome.storage.sync.get("bookmarkFolderId");
    folderSelect.value = bookmarkFolderId;
  }
  
  populateFolderSelect();
  
  folderSelect.addEventListener("change", async (event) => {
    await chrome.storage.sync.set({ bookmarkFolderId: event.target.value });
  });
  