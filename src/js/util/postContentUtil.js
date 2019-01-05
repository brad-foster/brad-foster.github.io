
var Util = {
  isAdminEnabled : function() {
    return false;
  },

  getPostObjects : function() {
    return [
			{
        postTitle: 'Post Title 1',
        postAuthor: 'Brad Foster',
        postDate: new Date(),
        postBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac lectus nulla. Nulla finibus eros velit, vel efficitur odio efficitur quis. Quisque fermentum iaculis ipsum a rhoncus. Fusce mollis mauris leo, sed rhoncus nisi gravida non. Nullam nec nibh nec erat blandit suscipit eget ut nisi. In pharetra odio ex, egestas egestas tellus elementum sed. Etiam luctus semper augue non tristique. Etiam dignissim eros sem, id semper enim ultricies eu. Fusce convallis ex ligula, iaculis fringilla ligula viverra eu. Aliquam erat volutpat. Donec blandit sapien vel risus ullamcorper dapibus. Nam vestibulum malesuada molestie. In hac habitasse platea dictumst. Integer ut dui pellentesque eros luctus laoreet. Sed tristique lectus vel tempor fermentum. Maecenas eros arcu, fermentum eget convallis et, ullamcorper non lacus. Phasellus tempor pulvinar euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta leo feugiat nisi gravida condimentum. Nam vel libero id justo laoreet venenatis. Phasellus ac luctus mi, sit amet posuere dolor. Aliquam ac odio a nisl dictum sollicitudin. Pellentesque vulputate turpis a tortor semper convallis. Sed auctor semper ligula in viverra. Sed fringilla neque nulla, eget eleifend arcu vestibulum sed. Mauris vehicula orci sed orci condimentum, eget molestie ante vestibulum. Etiam tempor augue eget finibus aliquet.'
      },
			{
        postTitle: 'Post Title 2',
        postAuthor: 'Brad Foster',
        postDate: new Date(),
        postBody: 'Cras quis metus in nisi tincidunt bibendum. Fusce lobortis feugiat nulla, quis scelerisque diam commodo non. Etiam ac congue nunc. Nullam volutpat quis turpis a imperdiet. Proin imperdiet aliquam luctus. In et varius sem. Donec neque neque, viverra ac sapien id, pellentesque ullamcorper enim. Aenean posuere porta dui, eget elementum eros hendrerit sed. Proin tristique tempus pellentesque. Fusce ornare velit ac sodales pellentesque. Maecenas sagittis erat arcu, a facilisis est sollicitudin nec. Nam suscipit enim orci. Nam gravida orci diam, vel varius lorem consectetur ut. Integer pharetra ligula quis nulla rhoncus, eu mollis massa imperdiet. Morbi rutrum id massa at feugiat. Etiam dignissim finibus arcu eu eleifend. Suspendisse nec imperdiet enim. Duis sollicitudin at lacus vel cursus. Nulla sit amet fermentum quam.'
      }
		];
  }
}

module.exports = Util;
