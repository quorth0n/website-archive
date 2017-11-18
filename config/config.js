var CONFIG = CONFIG || {};

CONFIG.prompt = function(cwd, user) {
   if (user)
      return '<span class="user">' + user +
          '</span>@<span class="host">cyberia</span>:<span class="cwd">' +
          cwd + '</span>$ ';
   return 'website $ ';
};

CONFIG.username = '';
