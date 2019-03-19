module.exports = {
    components: {
      categories: [
        {
          name: 'General',
          include: [
            'packages/gestalt/src/Badge/Badge.js',
            'packages/gestalt/src/Box/Box.js',
            'packages/gestalt/src/Button/Button.js',
            'packages/gestalt/src/Checkbox/Checkbox.js',
            'packages/gestalt/src/Label/Label.js',
            'packages/gestalt/src/Text/Text.js',
            // 'packages/gestalt/src/Avatar/Avatar.js', - there is problem with props
          ]
        }
      ]
    },
    name: 'Pinterest Gestalt'
  };

  