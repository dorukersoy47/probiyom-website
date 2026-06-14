/* ===================================================================
   BlogList – renders a list of blog post cards
   =================================================================== */

function BlogList(container, posts) {
  if (!posts || posts.length === 0) {
    container.innerHTML = '<div class="empty-state">Henüz blog yazısı eklenmedi.</div>';
    return;
  }

  var html = '<div class="blog-list">';
  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];
    var imageAlt = post.imageName || post.title || '';

    var imageHtml = '';
    if (post.imageDir) {
      imageHtml =
        '<div class="blog-post-image">' +
          '<img src="' + escapeAttr(post.imageDir) + '" alt="' + escapeAttr(imageAlt) + '">' +
        '</div>';
    }

    html +=
      '<article class="blog-post">' +
        imageHtml +
        '<div class="blog-post-body">' +
          '<h2 class="blog-post-title">' + escapeHtml(post.title) + '</h2>' +
          '<p class="blog-post-text">' + escapeHtml(post.text) + '</p>' +
        '</div>' +
      '</article>';
  }
  html += '</div>';

  container.innerHTML = html;
}
