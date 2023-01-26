import * as actionTypes from '../actionTypes';

const initialState = {
  data: [
    {
      id: 1,
      user_id: 2,
      header: 'Первая новость',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod turpis sit amet dolor pellentesque, quis lobortis mauris sollicitudin. Suspendisse pellentesque sit amet mi vel pharetra. Proin vitae faucibus urna. Vestibulum porta quam leo, eu placerat risus aliquet sed. Praesent nec sollicitudin ligula, a gravida eros. Mauris sollicitudin at urna eget rutrum. Phasellus viverra justo faucibus nibh interdum, vel convallis lacus hendrerit. Phasellus lorem mauris, varius quis congue sed, consectetur vitae ante. In imperdiet odio quis libero ultrices elementum. Curabitur commodo ipsum non purus blandit, sit amet euismod eros dapibus. Morbi convallis neque id felis vestibulum, ut imperdiet ipsum efficitur. Nam a libero id sapien condimentum tempor iaculis ac mi. Praesent ornare sed felis in sagittis.\n\nDonec eu diam viverra, tincidunt quam fermentum, eleifend arcu. Nulla vitae justo sed arcu lacinia placerat. Donec congue nunc vitae ligula porta, quis auctor ex mattis. Aenean pharetra eget metus ac lobortis. Sed velit magna, semper consectetur leo sit amet, pharetra euismod augue. Curabitur consequat at lorem non facilisis. Curabitur vitae mattis nisl, vel accumsan est. Pellentesque iaculis, enim nec scelerisque semper, nunc justo efficitur tortor, sit amet pellentesque nisl leo quis ex. Aenean sapien tortor, fringilla suscipit congue quis, dignissim eu ex. Proin vel sodales lacus. Donec commodo interdum porta.\n\nUt condimentum velit risus, eget feugiat tellus bibendum et. Cras accumsan, ex nec bibendum pulvinar, mi neque ultricies massa, non placerat justo orci vel erat. Maecenas cursus nibh at nunc sodales ultricies. In hac habitasse platea dictumst. Cras iaculis dolor quis consequat laoreet. Morbi consequat dui in massa accumsan fringilla. Fusce diam ligula, porta eget ante eu, pharetra bibendum augue. Aliquam erat volutpat.\n\nCras ut elementum magna. Donec sed velit metus. Duis tincidunt nisl eu nibh varius, nec interdum purus ultricies. Praesent dictum volutpat dignissim. Nullam at vulputate sem. Duis scelerisque sed ligula et consequat. Duis eget nisl ut sem porta lobortis vitae nec sapien.\n\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit quis libero non ultrices. Vestibulum quis rhoncus augue. Praesent sit amet pellentesque turpis. Pellentesque quis lorem eros. Aliquam gravida fringilla purus a mollis. Nam sit amet consectetur nulla. Donec eu condimentum justo. Donec at urna ac lectus blandit cursus. Suspendisse id nibh mollis, bibendum tellus at, molestie purus.',
      image: null,
      created_at: null,
      updated_at: null,
      user: {
        id: 2,
        name: 'grigory',
        email: 'g.palanskiy@tg.dunice.net',
      },
      tags: [
        {
          name: 'lorem',
        },
        {
          name: 'ipsum',
        },
      ],
    },
    {
      id: 2,
      user_id: 2,
      header: 'Вторая новость',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod turpis sit amet dolor pellentesque, quis lobortis mauris sollicitudin. Suspendisse pellentesque sit amet mi vel pharetra. Proin vitae faucibus urna. Vestibulum porta quam leo, eu placerat risus aliquet sed. Praesent nec sollicitudin ligula, a gravida eros. Mauris sollicitudin at urna eget rutrum. Phasellus viverra justo faucibus nibh interdum, vel convallis lacus hendrerit. Phasellus lorem mauris, varius quis congue sed, consectetur vitae ante. In imperdiet odio quis libero ultrices elementum. Curabitur commodo ipsum non purus blandit, sit amet euismod eros dapibus. Morbi convallis neque id felis vestibulum, ut imperdiet ipsum efficitur. Nam a libero id sapien condimentum tempor iaculis ac mi. Praesent ornare sed felis in sagittis.\n\nDonec eu diam viverra, tincidunt quam fermentum, eleifend arcu. Nulla vitae justo sed arcu lacinia placerat. Donec congue nunc vitae ligula porta, quis auctor ex mattis. Aenean pharetra eget metus ac lobortis. Sed velit magna, semper consectetur leo sit amet, pharetra euismod augue. Curabitur consequat at lorem non facilisis. Curabitur vitae mattis nisl, vel accumsan est. Pellentesque iaculis, enim nec scelerisque semper, nunc justo efficitur tortor, sit amet pellentesque nisl leo quis ex. Aenean sapien tortor, fringilla suscipit congue quis, dignissim eu ex. Proin vel sodales lacus. Donec commodo interdum porta.\n\nUt condimentum velit risus, eget feugiat tellus bibendum et. Cras accumsan, ex nec bibendum pulvinar, mi neque ultricies massa, non placerat justo orci vel erat. Maecenas cursus nibh at nunc sodales ultricies. In hac habitasse platea dictumst. Cras iaculis dolor quis consequat laoreet. Morbi consequat dui in massa accumsan fringilla. Fusce diam ligula, porta eget ante eu, pharetra bibendum augue. Aliquam erat volutpat.\n\nCras ut elementum magna. Donec sed velit metus. Duis tincidunt nisl eu nibh varius, nec interdum purus ultricies. Praesent dictum volutpat dignissim. Nullam at vulputate sem. Duis scelerisque sed ligula et consequat. Duis eget nisl ut sem porta lobortis vitae nec sapien.\n\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque blandit quis libero non ultrices. Vestibulum quis rhoncus augue. Praesent sit amet pellentesque turpis. Pellentesque quis lorem eros. Aliquam gravida fringilla purus a mollis. Nam sit amet consectetur nulla. Donec eu condimentum justo. Donec at urna ac lectus blandit cursus. Suspendisse id nibh mollis, bibendum tellus at, molestie purus.',
      image: null,
      created_at: null,
      updated_at: null,
      user: {
        id: 2,
        name: 'grigory',
        email: 'g.palanskiy@tg.dunice.net',
      },
      tags: [
        {
          name: 'lorem',
        },
        {
          name: 'ipsum',
        },
      ],
    },
  ],
  isLoading: false,
  error: null,
};

const newsReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case actionTypes.NEWS_REQUESTED:
      return state;
    default:
      return state;
  }
};

export default newsReducer;
