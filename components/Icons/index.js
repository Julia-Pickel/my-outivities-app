const icons = {
  noFavorite: {
    title: "noFavorite",
    viewBox: "0 0 24 24",
    path: "M16.5 4.5c2.206 0 4 1.794 4 4c0 4.669-5.543 8.941-8.5 11.023C9.043 17.441 3.5 13.169 3.5 8.5c0-2.206 1.794-4 4-4a4.01 4.01 0 0 1 3.273 1.706L12 7.953l1.227-1.746A4.008 4.008 0 0 1 16.5 4.5m0-1.5A5.49 5.49 0 0 0 12 5.344A5.49 5.49 0 0 0 7.5 3A5.5 5.5 0 0 0 2 8.5c0 5.719 6.5 10.438 10 12.85c3.5-2.412 10-7.131 10-12.85A5.5 5.5 0 0 0 16.5 3z",
  },
  favorite: {
    title: "favorite",
    viewBox: "0 0 24 24",
    path: "M16.5 3A5.49 5.49 0 0 0 12 5.344A5.49 5.49 0 0 0 7.5 3A5.5 5.5 0 0 0 2 8.5c0 5.719 6.5 10.438 10 12.85c3.5-2.412 10-7.131 10-12.85A5.5 5.5 0 0 0 16.5 3z",
  },
  home: {
    title: "home",
    viewBox: "0 0 24 24",
    path: "M6 19h3.692v-5.885h4.616V19H18v-9l-6-4.538L6 10v9Zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.885h-2.616V20H5Zm7-7.77Z",
  },

  plus: {
    title: "plus",
    viewBox: "0 0 24 24",
    path: "M7 12h4V8h1v4h4v1h-4v4h-1v-4H7v-1m4.5-9a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4Z",
  },

  search: {
    title: "search",
    viewBox: "0 0 24 24",
    path: "m19.485 20.154l-6.262-6.262q-.75.639-1.725.989q-.975.35-1.96.35q-2.402 0-4.066-1.663q-1.664-1.664-1.664-4.065T5.47 5.436q1.663-1.667 4.064-1.667q2.402 0 4.068 1.664q1.666 1.664 1.666 4.067q0 1.042-.369 2.017q-.37.975-.97 1.668l6.262 6.261l-.707.708ZM9.538 14.23q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361q0-1.99-1.37-3.36q-1.37-1.37-3.36-1.37q-1.99 0-3.361 1.37q-1.37 1.37-1.37 3.36q0 1.99 1.37 3.36q1.37 1.37 3.36 1.37Z",
  },

  map: {
    title: "map",
    viewBox: "0 0 24 24",
    path: "m15 19.923l-6-2.1l-3.958 1.53q-.384.143-.713-.083Q4 19.044 4 18.635V6.404q0-.267.13-.489q.13-.22.378-.307L9 4.077l6 2.1l3.958-1.53q.384-.143.713.054q.329.197.329.587v12.385q0 .287-.159.498q-.158.212-.426.298L15 19.923Zm-.5-1.22v-11.7l-5-1.745v11.7l5 1.746Zm1 0L19 17.55V5.7l-3.5 1.304v11.7ZM5 18.3l3.5-1.342v-11.7L5 6.45V18.3ZM15.5 7.004v11.7v-11.7Zm-7-1.746v11.7v-11.7Z",
  },

  pin: {
    title: "pin",
    viewBox: "0 0 24 24",
    path: "M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7",
  },

  weather: {
    title: "weather",
    viewBox: "0 0 24 24",
    path: "M13.002 8.007c3.169 0 4.966 2.097 5.227 4.63h.08a3.687 3.687 0 0 1 3.692 3.683a3.687 3.687 0 0 1-3.692 3.682H7.695a3.687 3.687 0 0 1-3.692-3.682a3.687 3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.059-4.63 5.227-4.63Zm0 1.498c-2.071 0-3.877 1.633-3.877 3.889c0 .357-.319.638-.684.638h-.69c-1.261 0-2.284 1.001-2.284 2.236c0 1.235 1.023 2.236 2.284 2.236h10.502c1.262 0 2.284-1 2.284-2.236c0-1.235-1.022-2.236-2.283-2.236h-.691c-.365 0-.684-.28-.684-.638c0-2.285-1.806-3.89-3.877-3.89Zm-8.634 2.657a.75.75 0 0 1-.315.935l-.091.045l-.927.384a.75.75 0 0 1-.665-1.34l.091-.046l.927-.383a.75.75 0 0 1 .98.405Zm6.487-4.833l-.172.058a5.822 5.822 0 0 0-1.46.758a2.442 2.442 0 0 0-2.793 3.667a4.61 4.61 0 0 0-1.367.64a3.942 3.942 0 0 1 5.791-5.122ZM2.94 7.36l.105.035l.927.384a.75.75 0 0 1-.469 1.42L3.4 9.166l-.927-.384a.75.75 0 0 1 .469-1.42Zm3.815-2.986l.045.091l.384.927a.75.75 0 0 1-1.34.665l-.046-.091l-.383-.927a.75.75 0 0 1 1.34-.665Zm4.354-.319a.75.75 0 0 1 .44.875l-.035.105l-.383.927a.75.75 0 0 1-1.421-.469l.035-.106l.384-.926a.75.75 0 0 1 .98-.406Z",
  },

  temperature: {
    title: "temperature",
    viewBox: "0 0 24 24",
    path: "M12 2a3.25 3.25 0 0 1 3.245 3.065l.005.185l.001 7.952l.08.069a4.99 4.99 0 0 1 1.644 3.223l.019.252L17 17a5 5 0 1 1-8.51-3.56l.18-.17l.079-.068l.001-7.952a3.25 3.25 0 0 1 2.884-3.23l.182-.015L12 2Zm0 1.5a1.75 1.75 0 0 0-1.744 1.607l-.006.143v8.695l-.309.224a3.5 3.5 0 1 0 4.283.128l-.165-.127l-.307-.225l-.002-8.695A1.75 1.75 0 0 0 12 3.5ZM12 8a.75.75 0 0 1 .75.75v5.865a2.501 2.501 0 1 1-1.5 0V8.75A.75.75 0 0 1 12 8Z",
  },

  humidity: {
    title: "humidity",
    viewBox: "0 0 24 24",
    path: "M14.113 17.115q.416 0 .71-.29q.292-.292.292-.707q0-.416-.29-.71q-.292-.293-.707-.293q-.416 0-.71.291q-.293.291-.293.707t.291.71q.291.292.707.292m-4.663.123l5.788-5.788l-.688-.708l-5.808 5.808zm.432-4.353q.416 0 .71-.291q.293-.291.293-.707t-.291-.71q-.291-.292-.707-.292t-.71.29q-.292.292-.292.707q0 .416.29.71q.292.293.707.293M11.996 21Q8.998 21 7 18.937Q5 16.873 5 13.8q0-2.154 1.738-4.764T12 3.308q3.525 3.117 5.262 5.728Q19 11.646 19 13.8q0 3.073-2.003 5.137q-2.002 2.063-5 2.063M12 20q2.6 0 4.3-1.763T18 13.8q0-1.825-1.513-4.125T12 4.65Q9.025 7.375 7.513 9.675T6 13.8q0 2.675 1.7 4.438T12 20m0-7.846",
  },
};

export default function Icon({ variant, color, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={icons[variant].viewBox}
      fill={color}
      width={size}
    >
      <title>{icons[variant].title}</title>
      <path d={icons[variant].path} />
    </svg>
  );
}
