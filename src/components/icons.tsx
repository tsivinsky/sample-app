export function Hamburger({ ...props }) {
  return (
    <div {...props}>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="bars"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="#000000"
          d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
        ></path>
      </svg>
    </div>
  );
}

export function DashboardIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1662 2.88058C11.9388 2.23675 13.0611 2.23675 13.8337 2.88058L22.1671 9.82502C22.6421 10.2208 22.9167 10.8072 22.9167 11.4255V20.8334C22.9167 21.9841 21.9839 22.9168 20.8333 22.9168H4.16665C3.01605 22.9168 2.08331 21.9841 2.08331 20.8334V11.4255C2.08331 10.8072 2.35795 10.2208 2.83293 9.82502L11.1662 2.88058ZM12.5 4.48104L4.16665 11.4255V20.8334H8.33331V17.1876C8.33331 16.037 9.26605 15.1043 10.4166 15.1043H14.5833C15.7339 15.1043 16.6667 16.037 16.6667 17.1876V20.8334H20.8333V11.4255L12.5 4.48104ZM14.5833 20.8334V17.1876H10.4166V20.8334H14.5833Z"
        fill="#8B97AE"
      />
    </svg>
  );
}

export function ActivityIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1563 14.8438C10.1592 14.3197 10.0303 13.8033 9.78141 13.3421C9.53253 12.8809 9.17165 12.4897 8.73199 12.2045C8.29233 11.9193 7.78801 11.7493 7.26541 11.71C6.74282 11.6707 6.21874 11.7635 5.74141 11.9799C5.26407 12.1962 4.8488 12.5291 4.5338 12.9479C4.2188 13.3667 4.01419 13.8581 3.9388 14.3767C3.86341 14.8953 3.91966 15.4245 4.10237 15.9157C4.28508 16.4069 4.58838 16.8442 4.98438 17.1875C4.64819 17.4789 4.3781 17.8388 4.19217 18.2429C4.00624 18.6471 3.90876 19.0864 3.90625 19.5313V21.875C3.90625 22.0822 3.98856 22.2809 4.13507 22.4274C4.28159 22.574 4.4803 22.6563 4.6875 22.6563H6.25C6.4572 22.6563 6.65591 22.574 6.80243 22.4274C6.94894 22.2809 7.03125 22.0822 7.03125 21.875C7.03125 21.6678 6.94894 21.4691 6.80243 21.3226C6.65591 21.1761 6.4572 21.0938 6.25 21.0938H5.46875V19.5313C5.46875 19.1169 5.63337 18.7194 5.9264 18.4264C6.21942 18.1334 6.61685 17.9688 7.03125 17.9688C7.44565 17.9688 7.84308 18.1334 8.1361 18.4264C8.42913 18.7194 8.59375 19.1169 8.59375 19.5313V21.875C8.59375 22.0822 8.67606 22.2809 8.82257 22.4274C8.96909 22.574 9.1678 22.6563 9.375 22.6563C9.5822 22.6563 9.78091 22.574 9.92743 22.4274C10.0739 22.2809 10.1563 22.0822 10.1563 21.875V19.5313C10.1537 19.0864 10.0563 18.6471 9.87033 18.2429C9.6844 17.8388 9.41431 17.4789 9.07813 17.1875C9.41431 16.8961 9.6844 16.5363 9.87033 16.1321C10.0563 15.7279 10.1537 15.2887 10.1563 14.8438ZM5.46875 14.8438C5.46875 14.5347 5.56039 14.2326 5.73208 13.9757C5.90377 13.7187 6.1478 13.5185 6.43331 13.4002C6.71882 13.2819 7.03298 13.251 7.33608 13.3113C7.63917 13.3716 7.91758 13.5204 8.1361 13.7389C8.35462 13.9574 8.50344 14.2358 8.56373 14.5389C8.62402 14.842 8.59307 15.1562 8.47481 15.4417C8.35655 15.7272 8.15628 15.9712 7.89933 16.1429C7.64238 16.3146 7.34028 16.4063 7.03125 16.4063C6.61685 16.4063 6.21942 16.2416 5.9264 15.9486C5.63337 15.6556 5.46875 15.2582 5.46875 14.8438Z"
        fill="#8B97AE"
      />
      <path
        d="M20.0156 17.1875C20.497 16.7702 20.8393 16.2158 20.9968 15.5986C21.1542 14.9813 21.1193 14.3306 20.8966 13.7338C20.6739 13.1369 20.2742 12.6224 19.7509 12.2591C19.2276 11.8958 18.6058 11.7011 17.9688 11.7011C17.3317 11.7011 16.7099 11.8958 16.1866 12.2591C15.6633 12.6224 15.2636 13.1369 15.0409 13.7338C14.8182 14.3306 14.7833 14.9813 14.9407 15.5986C15.0982 16.2158 15.4405 16.7702 15.9219 17.1875C15.5857 17.4789 15.3156 17.8387 15.1297 18.2429C14.9437 18.6471 14.8463 19.0863 14.8438 19.5312V21.875C14.8438 22.0822 14.9261 22.2809 15.0726 22.4274C15.2191 22.5739 15.4178 22.6562 15.625 22.6562C15.8322 22.6562 16.0309 22.5739 16.1774 22.4274C16.3239 22.2809 16.4062 22.0822 16.4062 21.875V19.5312C16.4062 19.1168 16.5709 18.7194 16.8639 18.4264C17.1569 18.1334 17.5543 17.9687 17.9688 17.9687C18.3832 17.9687 18.7806 18.1334 19.0736 18.4264C19.3666 18.7194 19.5312 19.1168 19.5312 19.5312V21.0937H18.75C18.5428 21.0937 18.3441 21.176 18.1976 21.3226C18.0511 21.4691 17.9688 21.6678 17.9688 21.875C17.9688 22.0822 18.0511 22.2809 18.1976 22.4274C18.3441 22.5739 18.5428 22.6562 18.75 22.6562H20.3125C20.5197 22.6562 20.7184 22.5739 20.8649 22.4274C21.0114 22.2809 21.0938 22.0822 21.0938 21.875V19.5312C21.0912 19.0863 20.9938 18.6471 20.8078 18.2429C20.6219 17.8387 20.3518 17.4789 20.0156 17.1875ZM16.4062 14.8437C16.4062 14.5347 16.4979 14.2326 16.6696 13.9757C16.8413 13.7187 17.0853 13.5184 17.3708 13.4002C17.6563 13.2819 17.9705 13.251 18.2736 13.3113C18.5767 13.3715 18.8551 13.5204 19.0736 13.7389C19.2921 13.9574 19.4409 14.2358 19.5012 14.5389C19.5615 14.842 19.5306 15.1562 19.4123 15.4417C19.2941 15.7272 19.0938 15.9712 18.8368 16.1429C18.5799 16.3146 18.2778 16.4062 17.9688 16.4062C17.5543 16.4062 17.1569 16.2416 16.8639 15.9486C16.5709 15.6556 16.4062 15.2581 16.4062 14.8437Z"
        fill="#8B97AE"
      />
      <path
        d="M6.25 10.1562C6.4572 10.1562 6.65591 10.0739 6.80243 9.92743C6.94894 9.78091 7.03125 9.5822 7.03125 9.375V4.6875C7.03125 4.4803 7.11356 4.28159 7.26007 4.13507C7.40659 3.98856 7.6053 3.90625 7.8125 3.90625H15.625C15.8322 3.90625 16.0309 3.98856 16.1774 4.13507C16.3239 4.28159 16.4062 4.4803 16.4062 4.6875V6.25C16.4058 6.35336 16.3849 6.45562 16.3447 6.55083C16.3044 6.64605 16.2457 6.73233 16.1719 6.80469C16.0264 6.94902 15.83 7.03039 15.625 7.03125H9.375C9.1678 7.03125 8.96909 7.11356 8.82257 7.26007C8.67606 7.40659 8.59375 7.6053 8.59375 7.8125C8.59375 8.0197 8.67606 8.21841 8.82257 8.36493C8.96909 8.51144 9.1678 8.59375 9.375 8.59375H15.625C16.2466 8.59375 16.8427 8.34682 17.2823 7.90728C17.7218 7.46774 17.9688 6.8716 17.9688 6.25V4.6875C17.9688 4.0659 17.7218 3.46976 17.2823 3.03022C16.8427 2.59068 16.2466 2.34375 15.625 2.34375H7.8125C7.1909 2.34375 6.59476 2.59068 6.15522 3.03022C5.71568 3.46976 5.46875 4.0659 5.46875 4.6875V9.375C5.46875 9.5822 5.55106 9.78091 5.69757 9.92743C5.84409 10.0739 6.0428 10.1562 6.25 10.1562Z"
        fill="#8B97AE"
      />
    </svg>
  );
}

export function BloggersIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.35938 9.82821C4.50538 9.6834 4.67853 9.56883 4.8689 9.49107C5.05927 9.41331 5.26312 9.3739 5.46875 9.37509C5.88315 9.37509 6.28058 9.53971 6.57361 9.83273C6.86663 10.1258 7.03125 10.5232 7.03125 10.9376C7.03125 11.1448 7.11356 11.3435 7.26008 11.49C7.40659 11.6365 7.6053 11.7188 7.8125 11.7188C8.01971 11.7188 8.21842 11.6365 8.36493 11.49C8.51145 11.3435 8.59376 11.1448 8.59376 10.9376C8.59124 10.4927 8.49377 10.0535 8.30784 9.64927C8.12191 9.24508 7.85182 8.88524 7.51563 8.59384C7.99699 8.17658 8.33933 7.62218 8.49679 7.00491C8.65425 6.38765 8.6193 5.737 8.39662 5.14015C8.17395 4.54331 7.77418 4.02877 7.25089 3.66548C6.72761 3.30219 6.10579 3.1075 5.46875 3.1075C4.83172 3.1075 4.2099 3.30219 3.68661 3.66548C3.16332 4.02877 2.76356 4.54331 2.54088 5.14015C2.31821 5.737 2.28326 6.38765 2.44072 7.00491C2.59817 7.62218 2.94052 8.17658 3.42188 8.59384C3.36719 8.64071 3.30469 8.67978 3.25781 8.72665C2.96771 9.01708 2.73766 9.36182 2.58082 9.74118C2.42399 10.1205 2.34343 10.5271 2.34375 10.9376C2.34375 11.1448 2.42606 11.3435 2.57257 11.49C2.71909 11.6365 2.9178 11.7188 3.125 11.7188C3.3322 11.7188 3.53092 11.6365 3.67743 11.49C3.82394 11.3435 3.90625 11.1448 3.90625 10.9376C3.90506 10.732 3.94448 10.5281 4.02223 10.3377C4.09999 10.1474 4.21456 9.97421 4.35938 9.82821ZM5.46875 4.68759C5.77779 4.68759 6.07988 4.77923 6.33683 4.95092C6.59378 5.12261 6.79405 5.36664 6.91232 5.65215C7.03058 5.93766 7.06152 6.25182 7.00123 6.55492C6.94094 6.85801 6.79213 7.13642 6.57361 7.35494C6.35509 7.57346 6.07668 7.72228 5.77358 7.78257C5.47049 7.84285 5.15632 7.81191 4.87081 7.69365C4.5853 7.57539 4.34127 7.37512 4.16958 7.11817C3.99789 6.86122 3.90625 6.55912 3.90625 6.25009C3.90625 5.83569 4.07087 5.43826 4.3639 5.14523C4.65692 4.85221 5.05435 4.68759 5.46875 4.68759Z"
        fill="#8B97AE"
      />
      <path
        d="M9.375 10.9376C9.375 11.1448 9.45731 11.3435 9.60382 11.49C9.75034 11.6365 9.94905 11.7188 10.1563 11.7188C10.3635 11.7188 10.5622 11.6365 10.7087 11.49C10.8552 11.3435 10.9375 11.1448 10.9375 10.9376C10.9375 10.5232 11.1021 10.1258 11.3951 9.83273C11.6882 9.53971 12.0856 9.37509 12.5 9.37509C12.9144 9.37509 13.3118 9.53971 13.6049 9.83273C13.8979 10.1258 14.0625 10.5232 14.0625 10.9376C14.0625 11.1448 14.1448 11.3435 14.2913 11.49C14.4378 11.6365 14.6366 11.7188 14.8438 11.7188C15.051 11.7188 15.2497 11.6365 15.3962 11.49C15.5427 11.3435 15.625 11.1448 15.625 10.9376C15.6225 10.4927 15.525 10.0535 15.3391 9.64927C15.1532 9.24508 14.8831 8.88524 14.5469 8.59384C15.0282 8.17658 15.3706 7.62218 15.528 7.00491C15.6855 6.38765 15.6505 5.737 15.4279 5.14015C15.2052 4.54331 14.8054 4.02877 14.2821 3.66548C13.7589 3.30219 13.137 3.1075 12.5 3.1075C11.863 3.1075 11.2411 3.30219 10.7179 3.66548C10.1946 4.02877 9.79481 4.54331 9.57213 5.14015C9.34946 5.737 9.31451 6.38765 9.47196 7.00491C9.62942 7.62218 9.97177 8.17658 10.4531 8.59384C10.1169 8.88524 9.84685 9.24508 9.66092 9.64927C9.47499 10.0535 9.37751 10.4927 9.375 10.9376ZM10.9375 6.25009C10.9375 5.94106 11.0291 5.63896 11.2008 5.38201C11.3725 5.12506 11.6165 4.92479 11.9021 4.80653C12.1876 4.68826 12.5017 4.65732 12.8048 4.71761C13.1079 4.7779 13.3863 4.92671 13.6049 5.14523C13.8234 5.36375 13.9722 5.64216 14.0325 5.94526C14.0928 6.24836 14.0618 6.56252 13.9436 6.84803C13.8253 7.13354 13.625 7.37757 13.3681 7.54926C13.1111 7.72095 12.809 7.81259 12.5 7.81259C12.0856 7.81259 11.6882 7.64797 11.3951 7.35494C11.1021 7.06192 10.9375 6.66449 10.9375 6.25009Z"
        fill="#8B97AE"
      />
      <path
        d="M21.5781 8.59384C22.0595 8.17658 22.4018 7.62218 22.5593 7.00491C22.7167 6.38765 22.6818 5.737 22.4591 5.14015C22.2364 4.54331 21.8367 4.02877 21.3134 3.66548C20.7901 3.30219 20.1683 3.1075 19.5313 3.1075C18.8942 3.1075 18.2724 3.30219 17.7491 3.66548C17.2258 4.02877 16.8261 4.54331 16.6034 5.14015C16.3807 5.737 16.3458 6.38765 16.5032 7.00491C16.6607 7.62218 17.003 8.17658 17.4844 8.59384C17.4297 8.64071 17.3672 8.67978 17.3203 8.72665C17.0302 9.01708 16.8002 9.36182 16.6433 9.74118C16.4865 10.1205 16.4059 10.5271 16.4063 10.9376C16.4063 11.1448 16.4886 11.3435 16.6351 11.49C16.7816 11.6365 16.9803 11.7188 17.1875 11.7188C17.3947 11.7188 17.5934 11.6365 17.7399 11.49C17.8864 11.3435 17.9688 11.1448 17.9688 10.9376C17.9688 10.5232 18.1334 10.1258 18.4264 9.83273C18.7194 9.53971 19.1169 9.37509 19.5313 9.37509C19.9457 9.37509 20.3431 9.53971 20.6361 9.83273C20.9291 10.1258 21.0938 10.5232 21.0938 10.9376C21.0938 11.1448 21.1761 11.3435 21.3226 11.49C21.4691 11.6365 21.6678 11.7188 21.875 11.7188C22.0822 11.7188 22.2809 11.6365 22.4274 11.49C22.5739 11.3435 22.6563 11.1448 22.6563 10.9376C22.6537 10.4927 22.5563 10.0535 22.3703 9.64927C22.1844 9.24508 21.9143 8.88524 21.5781 8.59384ZM19.5313 4.68759C19.8403 4.68759 20.1424 4.77923 20.3993 4.95092C20.6563 5.12261 20.8566 5.36664 20.9748 5.65215C21.0931 5.93766 21.124 6.25182 21.0637 6.55492C21.0034 6.85801 20.8546 7.13642 20.6361 7.35494C20.4176 7.57346 20.1392 7.72228 19.8361 7.78257C19.533 7.84285 19.2188 7.81191 18.9333 7.69365C18.6478 7.57539 18.4038 7.37512 18.2321 7.11817C18.0604 6.86122 17.9688 6.55912 17.9688 6.25009C17.9688 5.83569 18.1334 5.43826 18.4264 5.14523C18.7194 4.85221 19.1169 4.68759 19.5313 4.68759Z"
        fill="#8B97AE"
      />
      <path
        d="M20.3126 18.7501H8.13295L8.36732 18.5235C8.51443 18.3764 8.59708 18.1769 8.59708 17.9688C8.59708 17.7608 8.51443 17.5613 8.36732 17.4142C8.22021 17.267 8.02068 17.1844 7.81263 17.1844C7.60458 17.1844 7.40506 17.267 7.25795 17.4142L5.69545 18.9767C5.62432 19.051 5.56857 19.1386 5.53138 19.2345C5.45324 19.4247 5.45324 19.638 5.53138 19.8282C5.56857 19.9241 5.62432 20.0117 5.69545 20.086L7.25795 21.6485C7.33057 21.7218 7.41698 21.7799 7.51218 21.8195C7.60738 21.8592 7.7095 21.8796 7.81263 21.8796C7.91577 21.8796 8.01788 21.8592 8.11308 21.8195C8.20829 21.7799 8.29469 21.7218 8.36732 21.6485C8.44055 21.5759 8.49867 21.4895 8.53833 21.3943C8.57799 21.2991 8.59841 21.197 8.59841 21.0938C8.59841 20.9907 8.57799 20.8886 8.53833 20.7934C8.49867 20.6982 8.44055 20.6118 8.36732 20.5392L8.13295 20.3126H20.3126C20.5198 20.3126 20.7185 20.2303 20.8651 20.0838C21.0116 19.9373 21.0939 19.7385 21.0939 19.5313C21.0939 19.3241 21.0116 19.1254 20.8651 18.9789C20.7185 18.8324 20.5198 18.7501 20.3126 18.7501Z"
        fill="#8B97AE"
      />
      <path
        d="M10.3828 15.8516C10.3096 15.9242 10.2515 16.0106 10.2118 16.1058C10.1721 16.201 10.1517 16.3031 10.1517 16.4063C10.1517 16.5094 10.1721 16.6115 10.2118 16.7067C10.2515 16.8019 10.3096 16.8883 10.3828 16.9609C10.4554 17.0342 10.5418 17.0923 10.637 17.132C10.7323 17.1716 10.8344 17.192 10.9375 17.192C11.0406 17.192 11.1427 17.1716 11.2379 17.132C11.3332 17.0923 11.4196 17.0342 11.4922 16.9609L13.0547 15.3984C13.1258 15.3241 13.1816 15.2365 13.2187 15.1406C13.2969 14.9504 13.2969 14.7371 13.2187 14.5469C13.1816 14.451 13.1258 14.3634 13.0547 14.2891L11.4922 12.7266C11.3451 12.5795 11.1455 12.4968 10.9375 12.4968C10.7295 12.4968 10.5299 12.5795 10.3828 12.7266C10.2357 12.8737 10.1531 13.0732 10.1531 13.2813C10.1531 13.4893 10.2357 13.6888 10.3828 13.8359L10.6172 14.0625H4.6875C4.4803 14.0625 4.28159 14.1448 4.13507 14.2913C3.98856 14.4378 3.90625 14.6366 3.90625 14.8438C3.90625 15.051 3.98856 15.2497 4.13507 15.3962C4.28159 15.5427 4.4803 15.625 4.6875 15.625H10.6172L10.3828 15.8516Z"
        fill="#8B97AE"
      />
    </svg>
  );
}

export function MutualAdvertisementIcon() {
  return (
    <svg
      width="25"
      height="29"
      viewBox="0 0 25 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2991_7835)" filter="url(#filter0_d_2991_7835)">
        <g filter="url(#filter1_d_2991_7835)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5019 9.2347L11.2392 7.97202C10.0838 6.81661 8.2105 6.81661 7.05507 7.97203C5.89967 9.12747 5.89965 11.0007 7.05502 12.1561L8.31765 13.4188L12.5017 17.6032L17.9341 12.1708L17.9487 12.1563C19.1042 11.0009 19.1042 9.12756 17.9487 7.97211C16.7933 6.8167 14.9201 6.81669 13.7646 7.97206L12.5019 9.2347ZM12.5017 20.1285L5.79214 13.419C3.93943 11.5661 3.93962 8.56211 5.79238 6.70934C7.64518 4.85655 10.6491 4.85655 12.5019 6.70934C14.3547 4.85663 17.3586 4.85666 19.2114 6.70943C21.0642 8.56221 21.0642 11.5662 19.2114 13.419L19.1883 13.4419L12.5017 20.1285Z"
            fill="#DCE0F4"
          />
          <path
            d="M12.5019 8.5276L11.5928 7.61847L11.5928 7.61847C10.2421 6.26779 8.05221 6.26779 6.70152 7.61848L6.70151 7.61849C5.35086 8.96918 5.35084 11.159 6.70145 12.5097L6.70146 12.5097L7.96408 13.7723L7.96409 13.7724L12.1481 17.9567L12.5016 18.3103L12.8552 17.9567L18.2855 12.5265L18.2876 12.5243L18.3001 12.512L18.3001 12.512L18.3023 12.5099C19.653 11.1592 19.653 8.96927 18.3023 7.61856L18.3023 7.61856C16.9516 6.26789 14.7618 6.26787 13.4111 7.6185L13.4111 7.6185L12.5019 8.5276ZM18.8347 13.0884L12.5017 19.4214L6.14571 13.0655C4.48826 11.4079 4.48842 8.72042 6.14594 7.06289C7.80347 5.40537 10.4908 5.40537 12.1484 7.06289L12.5019 7.41644L12.8555 7.0629C14.513 5.40545 17.2003 5.40547 18.8578 7.06298C20.5151 8.72028 20.5153 11.4072 18.8585 13.0648C18.8583 13.065 18.8581 13.0652 18.8578 13.0654L18.8361 13.087L18.8347 13.0884Z"
            stroke="black"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_2991_7835"
          x="-4"
          y="0"
          width="33"
          height="33"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2991_7835"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2991_7835"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_2991_7835"
          x="0.40271"
          y="5.31975"
          width="24.1982"
          height="22.8088"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2991_7835"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2991_7835"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_2991_7835">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function StructureIcon() {
  return (
    <svg
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9447 5.46874C15.9476 4.94468 15.8205 4.4283 15.5752 3.9671C15.3299 3.5059 14.9742 3.1147 14.5408 2.8295C14.1074 2.54429 13.6103 2.37423 13.0952 2.33497C12.58 2.29571 12.0635 2.38851 11.5929 2.60482C11.1224 2.82114 10.7131 3.15403 10.4026 3.57286C10.0921 3.99169 9.8904 4.48302 9.81609 5.00164C9.74177 5.52025 9.79722 6.0495 9.97731 6.54068C10.1574 7.03187 10.4564 7.46921 10.8467 7.81249C10.5153 8.10389 10.2491 8.46372 10.0658 8.86791C9.88256 9.27211 9.78647 9.71134 9.784 10.1562C9.784 10.3634 9.86513 10.5622 10.0096 10.7087C10.154 10.8552 10.3498 10.9375 10.5541 10.9375C10.7583 10.9375 10.9542 10.8552 11.0986 10.7087C11.243 10.5622 11.3242 10.3634 11.3242 10.1562C11.3242 9.74183 11.4864 9.34441 11.7753 9.05138C12.0641 8.75836 12.4559 8.59374 12.8644 8.59374C13.2728 8.59374 13.6646 8.75836 13.9534 9.05138C14.2423 9.34441 14.4045 9.74183 14.4045 10.1562C14.4045 10.3634 14.4857 10.5622 14.6301 10.7087C14.7745 10.8552 14.9704 10.9375 15.1746 10.9375C15.3789 10.9375 15.5747 10.8552 15.7192 10.7087C15.8636 10.5622 15.9447 10.3634 15.9447 10.1562C15.9422 9.71134 15.8461 9.27211 15.6629 8.86791C15.4796 8.46372 15.2134 8.10389 14.882 7.81249C15.2134 7.52108 15.4796 7.16125 15.6629 6.75706C15.8461 6.35287 15.9422 5.91363 15.9447 5.46874ZM11.3242 5.46874C11.3242 5.1597 11.4145 4.85761 11.5837 4.60066C11.753 4.34371 11.9935 4.14344 12.275 4.02517C12.5564 3.90691 12.8661 3.87597 13.1648 3.93626C13.4636 3.99655 13.738 4.14536 13.9534 4.36388C14.1688 4.5824 14.3155 4.86081 14.3749 5.16391C14.4344 5.467 14.4039 5.78117 14.2873 6.06668C14.1707 6.35219 13.9733 6.59622 13.72 6.76791C13.4667 6.9396 13.169 7.03124 12.8644 7.03124C12.4559 7.03124 12.0641 6.86662 11.7753 6.57359C11.4864 6.28056 11.3242 5.88314 11.3242 5.46874Z"
        fill="#DCE0F4"
      />
      <path
        d="M9.01386 17.1875C9.01677 16.6634 8.88971 16.147 8.64438 15.6858C8.39905 15.2246 8.04333 14.8334 7.60995 14.5482C7.17657 14.263 6.67945 14.093 6.16432 14.0537C5.6492 14.0144 5.13261 14.1072 4.66209 14.3236C4.19157 14.5399 3.78223 14.8728 3.47173 15.2916C3.16124 15.7104 2.95955 16.2018 2.88524 16.7204C2.81093 17.239 2.86637 17.7682 3.04647 18.2594C3.22657 18.7506 3.52554 19.1879 3.91587 19.5312L3.75415 19.664C3.46819 19.9545 3.24143 20.2992 3.08684 20.6786C2.93224 21.0579 2.85283 21.4645 2.85315 21.875C2.85315 22.0822 2.93428 22.2809 3.0787 22.4274C3.22312 22.5739 3.419 22.6562 3.62324 22.6562C3.82748 22.6562 4.02336 22.5739 4.16777 22.4274C4.31219 22.2809 4.39333 22.0822 4.39333 21.875C4.39333 21.4606 4.5556 21.0631 4.84444 20.7701C5.13328 20.4771 5.52503 20.3125 5.93351 20.3125C6.34199 20.3125 6.73374 20.4771 7.02258 20.7701C7.31142 21.0631 7.47369 21.4606 7.47369 21.875C7.47369 22.0822 7.55482 22.2809 7.69924 22.4274C7.84366 22.5739 8.03954 22.6562 8.24378 22.6562C8.44802 22.6562 8.64389 22.5739 8.78831 22.4274C8.93273 22.2809 9.01386 22.0822 9.01386 21.875C9.01139 21.4301 8.9153 20.9908 8.73203 20.5866C8.54876 20.1825 8.28253 19.8226 7.95114 19.5312C8.28253 19.2398 8.54876 18.88 8.73203 18.4758C8.9153 18.0716 9.01139 17.6324 9.01386 17.1875ZM5.93351 15.625C6.23813 15.625 6.5359 15.7166 6.78919 15.8883C7.04247 16.06 7.23987 16.304 7.35645 16.5895C7.47302 16.875 7.50352 17.1892 7.44409 17.4923C7.38466 17.7954 7.23798 18.0738 7.02258 18.2923C6.80718 18.5108 6.53275 18.6597 6.23398 18.7199C5.93522 18.7802 5.62554 18.7493 5.34411 18.631C5.06268 18.5128 4.82213 18.3125 4.6529 18.0556C4.48366 17.7986 4.39333 17.4965 4.39333 17.1875C4.39333 16.7731 4.5556 16.3756 4.84444 16.0826C5.13328 15.7896 5.52503 15.625 5.93351 15.625Z"
        fill="#DCE0F4"
      />
      <path
        d="M21.8128 19.5313C22.2873 19.1141 22.6247 18.5597 22.7799 17.9424C22.9351 17.3252 22.9007 16.6745 22.6812 16.0777C22.4617 15.4808 22.0676 14.9663 21.5518 14.603C21.036 14.2397 20.4231 14.045 19.7951 14.045C19.1672 14.045 18.5543 14.2397 18.0385 14.603C17.5226 14.9663 17.1286 15.4808 16.9091 16.0777C16.6896 16.6745 16.6552 17.3252 16.8104 17.9424C16.9656 18.5597 17.303 19.1141 17.7775 19.5313C17.4461 19.8228 17.1799 20.1826 16.9966 20.5868C16.8133 20.991 16.7173 21.4302 16.7148 21.8751C16.7148 22.0823 16.7959 22.281 16.9403 22.4275C17.0848 22.574 17.2806 22.6563 17.4849 22.6563C17.6891 22.6563 17.885 22.574 18.0294 22.4275C18.1738 22.281 18.255 22.0823 18.255 21.8751C18.255 21.4607 18.4172 21.0633 18.7061 20.7702C18.9949 20.4772 19.3867 20.3126 19.7951 20.3126C20.2036 20.3126 20.5954 20.4772 20.8842 20.7702C21.1731 21.0633 21.3353 21.4607 21.3353 21.8751C21.3353 22.0823 21.4165 22.281 21.5609 22.4275C21.7053 22.574 21.9012 22.6563 22.1054 22.6563C22.3096 22.6563 22.5055 22.574 22.6499 22.4275C22.7944 22.281 22.8755 22.0823 22.8755 21.8751C22.873 21.4302 22.7769 20.991 22.5937 20.5868C22.4104 20.1826 22.1442 19.8228 21.8128 19.5313ZM18.255 17.1876C18.255 16.8786 18.3453 16.5765 18.5145 16.3195C18.6838 16.0626 18.9243 15.8623 19.2057 15.744C19.4872 15.6258 19.7968 15.5948 20.0956 15.6551C20.3944 15.7154 20.6688 15.8642 20.8842 16.0827C21.0996 16.3013 21.2463 16.5797 21.3057 16.8828C21.3652 17.1859 21.3347 17.5 21.2181 17.7855C21.1015 18.071 20.9041 18.3151 20.6508 18.4868C20.3975 18.6585 20.0998 18.7501 19.7951 18.7501C19.3867 18.7501 18.9949 18.5855 18.7061 18.2925C18.4172 17.9994 18.255 17.602 18.255 17.1876Z"
        fill="#DCE0F4"
      />
      <path
        d="M14.4045 16.4062H13.6344V12.5C13.6344 12.2928 13.5533 12.0941 13.4089 11.9476C13.2645 11.8011 13.0686 11.7188 12.8643 11.7188C12.6601 11.7188 12.4642 11.8011 12.3198 11.9476C12.1754 12.0941 12.0943 12.2928 12.0943 12.5V16.4062H11.3242C11.1199 16.4062 10.9241 16.4886 10.7796 16.6351C10.6352 16.7816 10.5541 16.9803 10.5541 17.1875C10.5541 17.3947 10.6352 17.5934 10.7796 17.7399C10.9241 17.8864 11.1199 17.9688 11.3242 17.9688H14.4045C14.6088 17.9688 14.8046 17.8864 14.9491 17.7399C15.0935 17.5934 15.1746 17.3947 15.1746 17.1875C15.1746 16.9803 15.0935 16.7816 14.9491 16.6351C14.8046 16.4886 14.6088 16.4062 14.4045 16.4062Z"
        fill="#DCE0F4"
      />
    </svg>
  );
}

export function ShopIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.8125 21.0938H5.46875V7.03125H20.3125C20.5197 7.03125 20.7184 6.94894 20.8649 6.80243C21.0114 6.65591 21.0938 6.4572 21.0938 6.25C21.0938 6.0428 21.0114 5.84409 20.8649 5.69757C20.7184 5.55106 20.5197 5.46875 20.3125 5.46875H19.5312V3.125C19.5312 2.9178 19.4489 2.71909 19.3024 2.57257C19.1559 2.42606 18.9572 2.34375 18.75 2.34375H6.25C6.0428 2.34375 5.84409 2.42606 5.69757 2.57257C5.55106 2.71909 5.46875 2.9178 5.46875 3.125V5.46875H4.6875C4.4803 5.46875 4.28159 5.55106 4.13507 5.69757C3.98856 5.84409 3.90625 6.0428 3.90625 6.25V21.875C3.90625 22.0822 3.98856 22.2809 4.13507 22.4274C4.28159 22.5739 4.4803 22.6562 4.6875 22.6562H7.8125C8.0197 22.6562 8.21841 22.5739 8.36493 22.4274C8.51144 22.2809 8.59375 22.0822 8.59375 21.875C8.59375 21.6678 8.51144 21.4691 8.36493 21.3226C8.21841 21.1761 8.0197 21.0938 7.8125 21.0938ZM7.03125 3.90625H17.9688V5.46875H7.03125V3.90625Z"
        fill="#8B97AE"
      />
      <path
        d="M20.3125 8.59375C20.1053 8.59375 19.9066 8.67606 19.7601 8.82257C19.6136 8.96909 19.5312 9.1678 19.5312 9.375V21.0938H14.8438V17.1875C14.8438 16.9803 14.7614 16.7816 14.6149 16.6351C14.4684 16.4886 14.2697 16.4062 14.0625 16.4062H10.9375C10.7303 16.4062 10.5316 16.4886 10.3851 16.6351C10.2386 16.7816 10.1562 16.9803 10.1562 17.1875V21.875C10.1562 22.0822 10.2386 22.2809 10.3851 22.4274C10.5316 22.5739 10.7303 22.6562 10.9375 22.6562C11.1447 22.6562 11.3434 22.5739 11.4899 22.4274C11.6364 22.2809 11.7188 22.0822 11.7188 21.875V17.9688H13.2812V21.875C13.2812 22.0822 13.3636 22.2809 13.5101 22.4274C13.6566 22.5739 13.8553 22.6562 14.0625 22.6562H20.3125C20.5197 22.6562 20.7184 22.5739 20.8649 22.4274C21.0114 22.2809 21.0938 22.0822 21.0938 21.875V9.375C21.0938 9.1678 21.0114 8.96909 20.8649 8.82257C20.7184 8.67606 20.5197 8.59375 20.3125 8.59375Z"
        fill="#8B97AE"
      />
      <path
        d="M17.1875 8.59375H7.8125C7.6053 8.59375 7.40659 8.67606 7.26007 8.82257C7.11356 8.96909 7.03125 9.1678 7.03125 9.375C7.03125 9.5822 7.11356 9.78091 7.26007 9.92743C7.40659 10.0739 7.6053 10.1562 7.8125 10.1562H17.1875C17.3947 10.1562 17.5934 10.0739 17.7399 9.92743C17.8864 9.78091 17.9688 9.5822 17.9688 9.375C17.9688 9.1678 17.8864 8.96909 17.7399 8.82257C17.5934 8.67606 17.3947 8.59375 17.1875 8.59375Z"
        fill="#8B97AE"
      />
      <path
        d="M17.1875 11.7188H7.8125C7.6053 11.7188 7.40659 11.8011 7.26007 11.9476C7.11356 12.0941 7.03125 12.2928 7.03125 12.5C7.03125 12.7072 7.11356 12.9059 7.26007 13.0524C7.40659 13.1989 7.6053 13.2812 7.8125 13.2812H17.1875C17.3947 13.2812 17.5934 13.1989 17.7399 13.0524C17.8864 12.9059 17.9688 12.7072 17.9688 12.5C17.9688 12.2928 17.8864 12.0941 17.7399 11.9476C17.5934 11.8011 17.3947 11.7188 17.1875 11.7188Z"
        fill="#8B97AE"
      />
    </svg>
  );
}

export function MarathonIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7422 11.8516L16.2422 8.85156C15.8536 6.48805 14.7397 4.30387 13.0547 2.60156C12.9821 2.52834 12.8957 2.47022 12.8005 2.43055C12.7052 2.39089 12.6031 2.37047 12.5 2.37047C12.3969 2.37047 12.2948 2.39089 12.1995 2.43055C12.1043 2.47022 12.0179 2.52834 11.9453 2.60156C10.2603 4.30387 9.14636 6.48805 8.75781 8.85156L4.25781 11.8516C4.15034 11.9223 4.06202 12.0186 4.00069 12.1317C3.93936 12.2448 3.90692 12.3713 3.90625 12.5V15.625C3.90625 15.8322 3.98856 16.0309 4.13507 16.1774C4.28159 16.3239 4.4803 16.4062 4.6875 16.4062H6.25C6.4572 16.4062 6.65591 16.3239 6.80243 16.1774C6.94894 16.0309 7.03125 15.8322 7.03125 15.625C7.03125 15.4178 6.94894 15.2191 6.80243 15.0726C6.65591 14.9261 6.4572 14.8437 6.25 14.8437H5.46875V12.9219L8.59375 10.8359V15.625C8.59375 15.8322 8.67606 16.0309 8.82257 16.1774C8.96909 16.3239 9.1678 16.4062 9.375 16.4062H15.625C15.8322 16.4062 16.0309 16.3239 16.1774 16.1774C16.3239 16.0309 16.4062 15.8322 16.4062 15.625V10.8359L19.5312 12.9219V14.8437H18.75C18.5428 14.8437 18.3441 14.9261 18.1976 15.0726C18.0511 15.2191 17.9688 15.4178 17.9688 15.625C17.9688 15.8322 18.0511 16.0309 18.1976 16.1774C18.3441 16.3239 18.5428 16.4062 18.75 16.4062H20.3125C20.5197 16.4062 20.7184 16.3239 20.8649 16.1774C21.0114 16.0309 21.0938 15.8322 21.0938 15.625V12.5C21.0931 12.3713 21.0606 12.2448 20.9993 12.1317C20.938 12.0186 20.8497 11.9223 20.7422 11.8516ZM14.8438 14.8437H10.1562V10.6719C10.1608 8.33218 10.9908 6.06913 12.5 4.28125C14.0092 6.06913 14.8392 8.33218 14.8438 10.6719V14.8437Z"
        fill="#8B97AE"
      />
      <path
        d="M15.6251 17.9687C15.4179 17.9687 15.2192 18.051 15.0726 18.1976C14.9261 18.3441 14.8438 18.5428 14.8438 18.75C14.8438 18.9572 14.9261 19.1559 15.0726 19.3024C15.2192 19.4489 15.4179 19.5312 15.6251 19.5312C16.11 19.531 16.583 19.6811 16.979 19.961C17.3749 20.2408 17.6744 20.6366 17.836 21.0937H7.16414C7.32576 20.6366 7.6252 20.2408 8.02118 19.961C8.41716 19.6811 8.89019 19.531 9.37507 19.5312C9.58227 19.5312 9.78099 19.4489 9.9275 19.3024C10.074 19.1559 10.1563 18.9572 10.1563 18.75C10.1563 18.5428 10.074 18.3441 9.9275 18.1976C9.78099 18.051 9.58227 17.9687 9.37507 17.9687C8.33907 17.9687 7.3455 18.3803 6.61294 19.1129C5.88037 19.8454 5.46882 20.839 5.46882 21.875C5.46823 21.9778 5.48794 22.0797 5.52682 22.1749C5.56569 22.2701 5.62298 22.3567 5.69539 22.4297C5.8451 22.5724 6.04322 22.6534 6.25007 22.6562H18.7501C18.9573 22.6562 19.156 22.5739 19.3025 22.4274C19.449 22.2809 19.5313 22.0822 19.5313 21.875C19.5313 20.839 19.1198 19.8454 18.3872 19.1129C17.6546 18.3803 16.6611 17.9687 15.6251 17.9687Z"
        fill="#8B97AE"
      />
    </svg>
  );
}

export function LandingsIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.75 2.34375C17.9774 2.34375 17.2222 2.57285 16.5798 3.00207C15.9374 3.4313 15.4368 4.04137 15.1411 4.75514C14.8454 5.46892 14.7681 6.25433 14.9188 7.01207C15.0695 7.76981 15.4416 8.46584 15.9879 9.01214C16.5342 9.55843 17.2302 9.93047 17.9879 10.0812C18.7457 10.2319 19.5311 10.1546 20.2449 9.8589C20.9586 9.56325 21.5687 9.06258 21.9979 8.4202C22.4272 7.77782 22.6563 7.02258 22.6563 6.25C22.655 5.21437 22.2431 4.22151 21.5108 3.48921C20.7785 2.75691 19.7856 2.34497 18.75 2.34375ZM18.75 8.59375C18.2865 8.59375 17.8333 8.45629 17.4479 8.19876C17.0625 7.94122 16.7621 7.57518 16.5847 7.14691C16.4073 6.71865 16.3609 6.2474 16.4513 5.79276C16.5417 5.33811 16.7649 4.9205 17.0927 4.59272C17.4205 4.26494 17.8381 4.04172 18.2928 3.95128C18.7474 3.86085 19.2187 3.90726 19.6469 4.08466C20.0752 4.26205 20.4412 4.56245 20.6988 4.94788C20.9563 5.33331 21.0938 5.78645 21.0938 6.25C21.0931 6.87139 20.8459 7.46714 20.4065 7.90653C19.9671 8.34592 19.3714 8.59307 18.75 8.59375Z"
        fill="#8B97AE"
      />
      <path
        d="M20.3123 11.7188C20.1051 11.7188 19.9064 11.8011 19.7599 11.9476C19.6134 12.0941 19.5311 12.2928 19.5311 12.5V20.3125C19.5309 20.5196 19.4485 20.7183 19.302 20.8647C19.1556 21.0112 18.957 21.0936 18.7498 21.0938H4.68732C4.48012 21.0938 4.28141 21.0114 4.1349 20.8649C3.98838 20.7184 3.90607 20.5197 3.90607 20.3125V6.25C3.90634 6.04288 3.98874 5.84432 4.13519 5.69787C4.28165 5.55141 4.48021 5.46902 4.68732 5.46875H12.4998C12.707 5.46875 12.9057 5.38644 13.0522 5.23993C13.1988 5.09341 13.2811 4.8947 13.2811 4.6875C13.2811 4.4803 13.1988 4.28159 13.0522 4.13507C12.9057 3.98856 12.707 3.90625 12.4998 3.90625H4.68732C4.06593 3.90693 3.47019 4.15408 3.0308 4.59347C2.59141 5.03286 2.34426 5.62861 2.34358 6.25V20.3125C2.34274 20.6204 2.403 20.9254 2.52086 21.2099C2.63872 21.4943 2.81185 21.7525 3.03022 21.9696C3.47065 22.4077 4.0661 22.6545 4.68732 22.6562H18.7498C19.3712 22.6556 19.967 22.4084 20.4063 21.969C20.8457 21.5296 21.0929 20.9339 21.0936 20.3125V12.5C21.0936 12.2928 21.0113 12.0941 20.8647 11.9476C20.7182 11.8011 20.5195 11.7188 20.3123 11.7188Z"
        fill="#8B97AE"
      />
    </svg>
  );
}
