import * as eva from '@eva-design/eva';

export const mapping = {
  ...eva.mapping,

  components: {
    Button: {
      meta: {
        appearances: {
          filled: {
            default: true, // <-- The default appearance is `filled`
          },
        },
      },
      appearances: {
        ghost: {
          variantGroups: {
            status: {
              primary: {
                state: {
                  active: {
                    backgroundColor: 'color-basic-transparent-100',
                  },
                },
              },
            },
          },
        },
      },
    },
    Layout: {
      meta: {
        variantGroups: {
          level: {
            '1': {
              default: false,
            },
            '2': {
              default: true,
            },
          },
        },
      },
    },
  },
  strict: {
    // 'text-font-family': 'Lato-Regular',
  },
};
