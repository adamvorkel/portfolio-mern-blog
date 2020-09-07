const articles = [
    {
        name: 'test-article-1',
        title: 'This is Test Article 1',
        headline: 'This is a attention-catching headline for our article',
        content: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu vehicula nunc, id ornare mi. Suspendisse vel purus eget nisl mattis volutpat ut sed elit. Vestibulum egestas orci nec felis laoreet, id vulputate ipsum fermentum. Cras rutrum, elit eu ullamcorper molestie, erat nisl bibendum enim, congue accumsan nisi ligula sit amet nulla. Quisque commodo felis nulla, non iaculis ante varius in. Integer ultrices nulla a ante aliquam, vitae fringilla mi mattis. Ut et odio luctus, mollis dui ut, molestie arcu. Nunc vitae sagittis ante. Mauris eget leo vitae ipsum consequat elementum. Aenean blandit laoreet mauris vulputate tincidunt. Etiam scelerisque ipsum a lorem efficitur venenatis. Proin tristique diam at accumsan malesuada. Duis ornare convallis tempor. Morbi vitae tempor odio, eget vulputate ipsum. Donec non aliquet mauris. Fusce eget tristique dolor.`,
            `Nulla enim velit, commodo vitae lobortis non, convallis quis sapien. In ut lacus eget odio dignissim molestie. Sed eu ultricies augue. Aenean non erat in risus pellentesque dapibus. Curabitur mattis ornare magna, vitae aliquet risus sollicitudin a. Cras semper massa eleifend felis placerat malesuada at volutpat erat. Mauris vitae nunc nec arcu dictum auctor a et turpis.`,
            `Aliquam tempus, ante in blandit tristique, justo nisi ultrices arcu, id dapibus dolor lacus at odio. Etiam pellentesque turpis erat, sed ornare tellus consectetur eget. Donec eu facilisis nulla, et tempor velit. In hac habitasse platea dictumst. Pellentesque euismod sem quis neque volutpat, sed consequat turpis accumsan. Maecenas suscipit facilisis libero, eu aliquam ipsum pretium in. Morbi ultricies, tortor sed semper feugiat, nisi tellus elementum nunc, et faucibus elit magna tincidunt dolor. Suspendisse malesuada viverra diam, et commodo tortor. Pellentesque rutrum diam odio, id dignissim eros pellentesque vehicula. In maximus scelerisque elit, ut consequat nulla lobortis et. Praesent ac maximus lectus.`,
            `Integer a efficitur diam. Aliquam eget laoreet nisl, ut sollicitudin purus. Aliquam consectetur pellentesque tellus, sed tristique odio fermentum quis. Mauris sit amet lectus est. Vestibulum bibendum augue et ligula eleifend viverra. Suspendisse auctor lacus id vestibulum convallis. Morbi vulputate orci quis ligula vulputate, sit amet elementum quam tincidunt. Aliquam erat volutpat. Suspendisse tempor ante urna, ac vestibulum justo varius eget. Aenean non lectus vel massa pharetra finibus vel vitae ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
            `Fusce sollicitudin, quam sed luctus viverra, enim dolor auctor lectus, ut laoreet nunc enim et ligula. Ut blandit ipsum nunc, et semper sapien efficitur et. Sed malesuada purus at turpis ullamcorper vestibulum. Donec euismod ipsum in viverra pharetra. Sed nisi turpis, fermentum in tellus id, congue facilisis metus. Donec blandit arcu id nulla finibus blandit eu non lectus. Integer ac tortor vitae elit dictum posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In egestas diam et arcu condimentum ultricies.`
        ]
    },
    {
        name: 'docker-article-1',
        title: 'How to setup your local development environment with docker',
        headline: 'This is a attention-catching headline for our article',
        content: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu vehicula nunc, id ornare mi. Suspendisse vel purus eget nisl mattis volutpat ut sed elit. Vestibulum egestas orci nec felis laoreet, id vulputate ipsum fermentum. Cras rutrum, elit eu ullamcorper molestie, erat nisl bibendum enim, congue accumsan nisi ligula sit amet nulla. Quisque commodo felis nulla, non iaculis ante varius in. Integer ultrices nulla a ante aliquam, vitae fringilla mi mattis. Ut et odio luctus, mollis dui ut, molestie arcu. Nunc vitae sagittis ante. Mauris eget leo vitae ipsum consequat elementum. Aenean blandit laoreet mauris vulputate tincidunt. Etiam scelerisque ipsum a lorem efficitur venenatis. Proin tristique diam at accumsan malesuada. Duis ornare convallis tempor. Morbi vitae tempor odio, eget vulputate ipsum. Donec non aliquet mauris. Fusce eget tristique dolor.`,
            `Nulla enim velit, commodo vitae lobortis non, convallis quis sapien. In ut lacus eget odio dignissim molestie. Sed eu ultricies augue. Aenean non erat in risus pellentesque dapibus. Curabitur mattis ornare magna, vitae aliquet risus sollicitudin a. Cras semper massa eleifend felis placerat malesuada at volutpat erat. Mauris vitae nunc nec arcu dictum auctor a et turpis.`,
            `Aliquam tempus, ante in blandit tristique, justo nisi ultrices arcu, id dapibus dolor lacus at odio. Etiam pellentesque turpis erat, sed ornare tellus consectetur eget. Donec eu facilisis nulla, et tempor velit. In hac habitasse platea dictumst. Pellentesque euismod sem quis neque volutpat, sed consequat turpis accumsan. Maecenas suscipit facilisis libero, eu aliquam ipsum pretium in. Morbi ultricies, tortor sed semper feugiat, nisi tellus elementum nunc, et faucibus elit magna tincidunt dolor. Suspendisse malesuada viverra diam, et commodo tortor. Pellentesque rutrum diam odio, id dignissim eros pellentesque vehicula. In maximus scelerisque elit, ut consequat nulla lobortis et. Praesent ac maximus lectus.`,
            `Integer a efficitur diam. Aliquam eget laoreet nisl, ut sollicitudin purus. Aliquam consectetur pellentesque tellus, sed tristique odio fermentum quis. Mauris sit amet lectus est. Vestibulum bibendum augue et ligula eleifend viverra. Suspendisse auctor lacus id vestibulum convallis. Morbi vulputate orci quis ligula vulputate, sit amet elementum quam tincidunt. Aliquam erat volutpat. Suspendisse tempor ante urna, ac vestibulum justo varius eget. Aenean non lectus vel massa pharetra finibus vel vitae ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
            `Fusce sollicitudin, quam sed luctus viverra, enim dolor auctor lectus, ut laoreet nunc enim et ligula. Ut blandit ipsum nunc, et semper sapien efficitur et. Sed malesuada purus at turpis ullamcorper vestibulum. Donec euismod ipsum in viverra pharetra. Sed nisi turpis, fermentum in tellus id, congue facilisis metus. Donec blandit arcu id nulla finibus blandit eu non lectus. Integer ac tortor vitae elit dictum posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In egestas diam et arcu condimentum ultricies.`
        ]
    }
];

export default articles;