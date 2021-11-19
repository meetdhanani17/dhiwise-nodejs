module.exports = {
  purge: [
    './src/**/*.js',
    './**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: '200px' },
        md: { min: '541px' },
        lg: { min: '768px' },
        xl: { min: '1080px' },
        xxl: { min: '1380px' },
      },
      colors: {
        red: {
          500: '#FA4D56',
        },
        headerSearch: 'var(--color-bg-headerSearch)',
        primary: {
          DEFAULT: '#0061ff',
          10: 'var(--color-blue-10)',
          100: 'var(--color-blue-100)',
          text: 'var(--color-text-primary)',
          dark: 'var(--color-bg-primary)',
          light: 'var(--color-bg-primary-light)',
          inverse: 'var(--color-bg-inverse)',
          softlight: 'var(--color-bg-softlight)',
          themecard: 'var(--color-bg-default-light)',
          themecardborder: 'var(--color-border-default-light)',
          bodytext: '#232323',
          hoverdark: '#0352d1',
          message: '#232323',
          disable: '#9ec2fc',
          buttonOutline: 'var(--color-button-outline-border)',
        },
        other: {
          lightblue: 'var(--color-bg-lightblue)',
          lightgreen: 'var(--color-bg-lightGreen)',
          lightorange: 'var(--color-bg-lightorange)',
        },
        error: 'var(--color-bg-deactive)',
        body: {
          text: 'var(--color-text-body)',
        },
        secondary: {
          DEFAULT: '#FF800D',
          dark: '#FF800D',
          light: '#ffeddd',
          softlight: '#fff2e6',
          yellow: 'var(--color-bg-yellow)',
          yellowlight: '#fff8e1',
          red: '#da202a',
          redlight: '#fff1f1',
          reddarkLight: 'var(--color-bg-redstatus)',
          blue: '#0747cf',
          bluelight: '#f0f7ff',
          green: '#009E25',
          greenLight: 'var(--color-bg-greenLight)',
        },
        lightdefault: {
          light: 'var(--color-bg-light)',
        },
        gray: {
          black: 'var(--color-gray-black)',
          300: 'var(--color-gray-300)',
          350: 'var(--color-gray-350)',
          200: 'var(--color-gray-200)',
          100: 'var(--color-gray-100)',
          90: 'var(--color-gray-90)',
          80: 'var(--color-gray-80)',
          70: 'var(--color-gray-70)',
          60: 'var(--color-gray-60)',
          50: 'var(--color-gray-50)',
          40: 'var(--color-gray-40)',
          30: 'var(--color-gray-30)',
          20: 'var(--color-gray-20)',
          10: 'var(--color-gray-10)',
          0: 'var(--color-gray-0)',
          white: 'var(--color-gray-white)',
          input: 'var(--color-gray-input)',
          inputSub: 'var(--color-gray-inputSub)',
          error: 'var(--color-text-error)',
          selectDropdown: 'var(--color-select-dropdown)',
          activebg: 'var(--color-bg-active)',
          deactivebg: 'var(--color-bg-deactive)',
          codeButton: 'var(--color-code-button)',
        },
      },
      textColor: {
        white: 'var(--color-text-white)',
        buttontext: 'var(--color-button-text)',
        outlinebuttontext: 'var(--color-outline-button-text)',
        dashedbuttontext: 'var(--color-dashedbutton-text)',
        activetext: 'var(--color-active-text)',
        deactivetext: 'var(--color-deactive-text)',
        defaultWhite: '#fff',
        error: 'var(--color-text-error)',
      },
      placeholderColor: {
        primary: 'var(--color-placeholder-primary)',
      },
      backgroundColor: {
        white: 'var(--color-bg-white)',
        black: 'var(--color-bg-black)',
        popover: 'var(--color-bg-popover)',
        body: 'var(--color-bg-body)',
        overlay: 'rgba(0,0,0,0.73)',
        activebg: 'var(--color-bg-active)',
        deactivebg: 'var(--color-bg-deactive)',
      },
      backgroundOpacity: {
        10: '0.1',
        20: '0.2',
        95: '0.95',
      },
      width: {
        sidebar: 'var(--sidebar-width)',
        sidebarRight: 'calc(100% - 55px)',
        profileSidebar: 'var(--profile-sidebar-width)',
        profileRight: 'calc(100% - var(--profile-sidebar-width))',
        28: '7rem',
        100: '28rem',
        102: '36rem',
        4.5: '1.125rem',
        '1.5/12': '14%',
        '10.5/12': '86%',
        '2.5/12': '20%',
        '9.5/12': '80%',
        '3.5/12': '20%',
      },
      height: {
        4.5: '1.125rem',
        110: '30rem',
        body: 'var(--sidebar-height)',
      },
      borderRadius: {
        3: '3px',
      },
      maxHeight: {
        110: '35rem',
      },
      minHeight: {
        body: 'var(--sidebar-height)',
        9: '2rem',
        11: '2.5rem;',
      },
      spacing: {
        dw1: '0.25rem',
        dw5: '0.313rem',
      },
      boxShadow: {
        dw: 'rgba(0, 0 ,0 , 0.06) 0px 8px 16px 0px',
        dw1: 'rgba(0 ,0 ,0 , 0.08) 4px -3px 13px 0px',
        primary: 'var(--box-shadow-primary)',
      },
      cursor: {
        grab: 'grab',
      },
      fontSize: {
        xxs: '.625rem',
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '2.5xl': '1.75rem',
        '3xl': '2rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      fontWeight: {
        theme: 'var(--font-theme-DW1)',
      },
      lineHeight: {
        '1xl': '1.75rem',
        normal: '1.375rem',
      },
      inset: {
        '-0.3': '-3px',
      },
      borderWidth: {
        DEFAULT: '1px',
        1: '1px',
        3: '3px',
      },
      zIndex: {
        0: 0,
        1: 1,
        10000: 10000,
        1000000: 1000000,
      },
      outline: {
        none: '0',
      },
      fontFamily: {
        body: ['var(--font-famliy)'],
        title: ['var(--font-title-famliy)'],
      },
      divideColor: ['groupbox-hover'],
      hidden: ['group-hover'],
      block: ['group-hover'],
    },
  },
  variants: {},
  plugins: [],
};
