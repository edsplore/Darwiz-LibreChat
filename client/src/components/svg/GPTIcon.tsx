import { cn } from '~/utils/';

export default function GPTIcon({
  size = 25,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  const unit = '41';
  const height = size;
  const width = size;

  return (
    <svg
      // width={width}
      // height={height}
      // viewBox={`0 0 ${unit} ${unit}`}
      // fill="none"
      // xmlns="http://www.w3.org/2000/svg"
      // strokeWidth="1.5"
      // className={cn(className, '')}
      width={`${width}px`} // Updated to set width in pixels
      height={`${height}px`} // Updated to set height in pixels
      viewBox="0 0 3192 3192" // Updated viewBox to match new SVG
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={cn(className, '')} // Directly applied without utility function for simplicity

    >
      {/* <path
        d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
        fill="currentColor"
      /> */}
      <g transform="scale(9.6) translate(10, 10)">
				<defs id="SvgjsDefs22310"/><g id="SvgjsG22311" featureKey="rootContainer" transform="matrix(1.5902660807115943,0,0,1.5902660807115943,0,0)" fill="#fff"><path xmlns="http://www.w3.org/2000/svg" d="M98.254 0C44.077 0 0 44.076 0 98.254s44.077 98.254 98.254 98.254c54.177 0 98.254-44.076 98.254-98.254S152.431 0 98.254 0zm0 195.508C44.628 195.508 1 151.88 1 98.254S44.628 1 98.254 1c53.626 0 97.254 43.628 97.254 97.254s-43.628 97.254-97.254 97.254z"/><path xmlns="http://www.w3.org/2000/svg" d="M98.254 5.453c-51.171 0-92.801 41.63-92.801 92.801s41.63 92.801 92.801 92.801 92.802-41.63 92.802-92.801S149.425 5.453 98.254 5.453z"/></g><g id="SvgjsG22312" featureKey="PG4fjM-0" transform="matrix(0.6897502833260145,0,0,0.6897502833260145,122.01007043918241,84.23906754508701)" fill="#000000"><g xmlns="http://www.w3.org/2000/svg"><path d="M50.333,2.553c-15.686,0-29.611,7.656-38.255,19.422c-1.293,1.632-2.424,3.398-3.371,5.277   C4.998,34.01,2.885,41.763,2.885,50.001c0,26.163,21.285,47.448,47.448,47.448s47.448-21.285,47.448-47.448   S76.496,2.553,50.333,2.553z M44.928,61.67c-7.897,0-14.322-6.506-14.322-14.503s6.425-14.503,14.322-14.503   S59.25,39.17,59.25,47.167S52.825,61.67,44.928,61.67z M44.928,28.412c-10.242,0-18.574,8.413-18.574,18.755   s8.332,18.755,18.574,18.755c0.116,0,0.228-0.016,0.343-0.018c-2.924,1.144-6.097,1.777-9.415,1.777   c-14.448,0-26.203-11.895-26.203-26.515c0-4.277,1.013-8.317,2.798-11.899c0.911-1.658,1.931-3.248,3.045-4.766   c4.808-6.003,12.147-9.85,20.36-9.85c14.011,0,25.488,11.185,26.171,25.192C59.196,33.132,52.599,28.412,44.928,28.412z    M50.333,93.197c-23.313,0-42.36-18.568-43.158-41.69c4.214,11.893,15.478,20.427,28.681,20.427   c16.794,0,30.456-13.802,30.456-30.767S52.649,10.4,35.855,10.4c-1.047,0-2.082,0.054-3.103,0.158   c5.374-2.405,11.321-3.754,17.58-3.754c23.818,0,43.196,19.378,43.196,43.196S74.151,93.197,50.333,93.197z"/></g></g><g id="SvgjsG22313" featureKey="jxYttZ-0" transform="matrix(2.1853743382244937,0,0,2.1853743382244937,53.50867328568611,158.26002977645896)" fill="#000000"><path d="M1.14 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z M23.7635 7.76 l3 0 l0 7.24 c0 3.18 -2.28 5.1 -5.3 5.1 c-3.1 0 -5.3 -2.04 -5.3 -5.1 l0 -7.24 l3 0 l0 7.24 c0 1.44 0.86 2.32 2.3 2.32 c1.48 0 2.3 -0.86 2.3 -2.32 l0 -7.24 z M36.247 10.58 l0 2.92 l2.8 0 c0.92 0 1.46 -0.54 1.46 -1.46 s-0.54 -1.46 -1.46 -1.46 l-2.8 0 z M40.787 15.48 c0.56 0.76 1.12 1.52 1.7 2.26 c0.56 0.74 1.12 1.5 1.68 2.26 l-3.66 0 c-0.72 -0.96 -1.42 -1.92 -2.12 -2.88 c-0.7 -0.94 -1.42 -1.9 -2.14 -2.86 l0 5.74 l-3 0 l0 -12.24 l5.8 0 c2.28 0 4.22 1.74 4.22 4.04 c0 1.62 -1 3.04 -2.48 3.68 z M49.810500000000005 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z M64.994 7.76 l3 0 l0 5.74 l3.94 -5.74 l3.72 0 l-4.28 6.12 l4.44 6.12 l-3.68 0 l-4.14 -5.76 l0 5.76 l-3 0 l0 -12.24 z M86.3575 17.32 c2.18 0 3.3 -1.4 3.3 -3.44 c0 -2.16 -1.2 -3.44 -3.3 -3.44 c-2.2 0 -3.3 1.4 -3.3 3.44 c0 2.12 1.22 3.44 3.3 3.44 z M86.3575 20.1 c-3.76 0 -6.3 -2.56 -6.3 -6.22 c0 -3.78 2.66 -6.22 6.3 -6.22 c3.78 0 6.3 2.54 6.3 6.22 c0 3.8 -2.64 6.22 -6.3 6.22 z"/></g><g id="SvgjsG22314" featureKey="jxYttZ-1" transform="matrix(0.7743053865359523,0,0,0.7743053865359523,55.13277805569195,206.06882122650183)" fill="#000000"><path d="M1.12 7.76 l3 0 l0 12.24 l-3 0 l0 -12.24 z M18.563499999999998 7.76 l3 0 l0 12.24 l-3 0 l-4.8 -7.16 l0 7.16 l-3 0 l0 -12.24 l3 0 l4.8 7.16 l0 -7.16 z M36.047 7.76 l3 0 l0 12.24 l-3 0 l-4.8 -7.16 l0 7.16 l-3 0 l0 -12.24 l3 0 l4.8 7.16 l0 -7.16 z M51.6105 17.32 c2.18 0 3.3 -1.4 3.3 -3.44 c0 -2.16 -1.2 -3.44 -3.3 -3.44 c-2.2 0 -3.3 1.4 -3.3 3.44 c0 2.12 1.22 3.44 3.3 3.44 z M51.6105 20.1 c-3.76 0 -6.3 -2.56 -6.3 -6.22 c0 -3.78 2.66 -6.22 6.3 -6.22 c3.78 0 6.3 2.54 6.3 6.22 c0 3.8 -2.64 6.22 -6.3 6.22 z M71.97399999999999 7.76 l3.28 0 l-4.9 12.24 l-3 0 l-4.9 -12.24 l3.26 0 l3.14 8.82 z M87.3575 17.52 l-4.5 0 l-0.88 2.48 l-3.26 0 l4.9 -12.24 l3 0 l4.9 12.24 l-3.28 0 z M83.8375 14.74 l2.54 0 l-1.26 -3.56 z M95.001 7.76 l10.2 0 l0 2.78 l-3.6 0 l0 9.46 l-3 0 l0 -9.46 l-3.6 0 l0 -2.78 z M111.14450000000001 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z M134.3915 7.76 l10.2 0 l0 2.78 l-3.6 0 l0 9.46 l-3 0 l0 -9.46 l-3.6 0 l0 -2.78 z M155.99500000000003 17.32 c2.18 0 3.3 -1.4 3.3 -3.44 c0 -2.16 -1.2 -3.44 -3.3 -3.44 c-2.2 0 -3.3 1.4 -3.3 3.44 c0 2.12 1.22 3.44 3.3 3.44 z M155.99500000000003 20.1 c-3.76 0 -6.3 -2.56 -6.3 -6.22 c0 -3.78 2.66 -6.22 6.3 -6.22 c3.78 0 6.3 2.54 6.3 6.22 c0 3.8 -2.64 6.22 -6.3 6.22 z M179.35850000000002 12.5 l0 6.8 c-1.42 0.54 -3.2 0.84 -4.72 0.84 c-3.9 0 -6.52 -2.34 -6.52 -6.2 c0 -4.22 3.14 -6.28 6.98 -6.28 c0.26 0 0.54 0 0.86 0.02 c0.3 0.02 0.62 0.06 0.96 0.08 c0.62 0.08 1.24 0.16 1.84 0.34 l0 3.06 c-0.22 -0.1 -0.46 -0.18 -0.74 -0.26 c-0.3 -0.06 -0.6 -0.12 -0.92 -0.18 c-0.64 -0.12 -1.32 -0.16 -1.98 -0.16 c-2.54 0 -4 0.78 -4 3.38 c0 2.54 1.34 3.3 3.62 3.3 c0.24 0 0.5 -0.02 0.78 -0.04 c0.26 -0.02 0.54 -0.04 0.84 -0.06 l0 -1.86 l-2.6 0 l0 -2.78 l5.6 0 z M185.642 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z M200.1055 7.76 l10.2 0 l0 2.78 l-3.6 0 l0 9.46 l-3 0 l0 -9.46 l-3.6 0 l0 -2.78 z M223.649 7.76 l3 0 l0 12.24 l-3 0 l0 -4.72 l-4.4 0 l0 4.72 l-3 0 l0 -12.24 l3 0 l0 4.74 l4.4 0 l0 -4.74 z M233.3125 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z M251.496 10.58 l0 2.92 l2.8 0 c0.92 0 1.46 -0.54 1.46 -1.46 s-0.54 -1.46 -1.46 -1.46 l-2.8 0 z M256.036 15.48 c0.56 0.76 1.12 1.52 1.7 2.26 c0.56 0.74 1.12 1.5 1.68 2.26 l-3.66 0 c-0.72 -0.96 -1.42 -1.92 -2.12 -2.88 c-0.7 -0.94 -1.42 -1.9 -2.14 -2.86 l0 5.74 l-3 0 l0 -12.24 l5.8 0 c2.28 0 4.22 1.74 4.22 4.04 c0 1.62 -1 3.04 -2.48 3.68 z"/></g>
			</g>
    </svg>
  );
}
