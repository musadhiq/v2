import React from "react";
import { LoadingContainer, LoadingInnerContainer } from "./Style";
function Loading() {
  return (
    <LoadingContainer>
      <LoadingInnerContainer>
        <svg
          className="loading"
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          zoomAndPan="magnify"
          viewBox="0 0 375 374.999991"
          height="500"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <defs>
            <clipPath id="id1">
              <path
                d="M 115.40625 112.5 L 259.40625 112.5 L 259.40625 262.5 L 115.40625 262.5 Z M 115.40625 112.5 "
                clipRule="nonzero"
              />
            </clipPath>
            <clipPath id="id2">
              <path
                d="M 97 91 L 258 91 L 258 201 L 97 201 Z M 97 91 "
                clipRule="nonzero"
              />
            </clipPath>
            <clipPath id="id3">
              <path
                d="M 93.960938 95.121094 L 255.078125 88.511719 L 259.410156 194.171875 L 98.296875 200.78125 Z M 93.960938 95.121094 "
                clipRule="nonzero"
              />
            </clipPath>
            <clipPath id="id4">
              <path
                d="M 93.960938 95.121094 L 255.078125 88.511719 L 259.410156 194.171875 L 98.296875 200.78125 Z M 93.960938 95.121094 "
                clipRule="nonzero"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#id1)">
            <path
              fill="#64ffda"
              className="m"
              d="M 259.078125 216.511719 L 217.714844 113.546875 C 217.304688 112.53125 215.867188 112.53125 215.460938 113.546875 L 200.5625 150.609375 C 200.449219 150.902344 200.445312 151.226562 200.5625 151.515625 L 226.9375 217.414062 C 227.121094 217.875 227.570312 218.175781 228.0625 218.175781 L 257.949219 218.179688 C 258.808594 218.179688 259.398438 217.308594 259.078125 216.511719 Z M 159.351562 113.546875 L 203.425781 223.472656 C 203.542969 223.761719 203.542969 224.085938 203.421875 224.378906 L 188.523438 261.453125 C 188.113281 262.46875 186.675781 262.46875 186.269531 261.453125 L 159.347656 194.441406 C 158.9375 193.421875 157.503906 193.421875 157.09375 194.4375 L 147.859375 217.410156 C 147.675781 217.871094 147.230469 218.171875 146.734375 218.171875 L 116.847656 218.167969 C 115.988281 218.167969 115.398438 217.296875 115.722656 216.5 L 157.097656 113.546875 C 157.507812 112.53125 158.945312 112.53125 159.351562 113.546875 "
              fillOpacity="1"
              fillRule="nonzero"
            />
          </g>
          <g clipPath="url(#id2)">
            <g clipPath="url(#id3)">
              <g clipPath="url(#id4)">
                <path
                  fill="#ffffff"
                  d="M 150.425781 97.71875 C 119.5 109.945312 97.652344 140.089844 97.699219 175.304688 C 97.710938 184.148438 99.109375 192.667969 101.675781 200.660156 L 101.9375 200.558594 C 99.402344 192.683594 98.050781 184.277344 98.082031 175.546875 C 98.089844 173.648438 98.167969 171.761719 98.304688 169.894531 C 104.777344 170.664062 111.347656 171.054688 117.996094 171.070312 C 118.902344 178.417969 120.582031 185.601562 122.902344 192.476562 L 123.089844 192.402344 C 120.777344 185.558594 119.132812 178.402344 118.269531 171.070312 C 123.722656 171.074219 129.226562 170.820312 134.761719 170.289062 C 138.46875 169.933594 142.128906 169.460938 145.75 168.878906 C 147.003906 173.316406 148.414062 177.714844 149.96875 182.039062 L 150.074219 181.996094 C 148.523438 177.683594 147.113281 173.289062 145.875 168.855469 C 157.261719 167.015625 168.234375 164.0625 178.679688 160.125 L 184.90625 175.710938 L 178.9375 160.027344 C 189.132812 156.164062 198.828125 151.367188 207.925781 145.738281 C 209.832031 149.574219 211.636719 153.542969 213.324219 157.609375 L 213.429688 157.566406 C 211.742188 153.492188 209.933594 149.519531 208.035156 145.671875 C 215.359375 141.136719 222.300781 136.066406 228.808594 130.519531 C 232.503906 135.90625 235.75 141.746094 238.449219 147.917969 L 238.652344 147.839844 C 235.941406 141.640625 232.695312 135.769531 229.011719 130.339844 C 233.414062 126.574219 237.621094 122.589844 241.605469 118.40625 C 247.871094 124.941406 253.042969 132.507812 256.832031 140.832031 L 257.097656 140.726562 C 243.957031 111.878906 214.820312 91.839844 181.007812 91.890625 C 172.5 91.90625 164.296875 93.191406 156.566406 95.566406 C 155.902344 95.75 155.25 95.953125 154.597656 96.167969 C 154.09375 96.308594 153.601562 96.480469 153.121094 96.679688 C 153.082031 96.695312 153.042969 96.714844 153.007812 96.730469 C 152.664062 96.859375 152.316406 96.984375 151.976562 97.117188 C 151.910156 97.144531 151.84375 97.175781 151.777344 97.203125 C 151.328125 97.375 150.871094 97.539062 150.425781 97.71875 Z M 153.21875 98.117188 C 153.414062 98.046875 153.613281 97.976562 153.808594 97.90625 L 157.566406 107.296875 C 152.667969 109.097656 147.714844 110.539062 142.738281 111.632812 C 144.957031 104.875 148.523438 100.207031 153.21875 98.117188 Z M 155.121094 97.449219 C 155.238281 97.410156 155.363281 97.375 155.480469 97.335938 C 158.902344 96.46875 162.828125 96.816406 167.203125 98.558594 C 168.757812 99.175781 170.320312 99.957031 171.894531 100.878906 C 167.859375 103.03125 163.65625 104.96875 159.285156 106.652344 C 159.089844 106.726562 158.898438 106.796875 158.703125 106.867188 Z M 147.601562 100.65625 C 145.140625 103.378906 143.214844 107.144531 141.878906 111.816406 C 138.71875 112.484375 135.542969 113.011719 132.375 113.40625 C 136.6875 108.089844 141.820312 103.769531 147.601562 100.65625 Z M 161.347656 95.828125 C 165.886719 94.992188 170.667969 94.796875 175.644531 95.304688 C 177.175781 95.460938 178.699219 95.6875 180.21875 95.96875 C 177.777344 97.550781 175.265625 99.054688 172.679688 100.457031 C 170.703125 99.199219 168.738281 98.164062 166.796875 97.375 C 164.894531 96.601562 163.078125 96.089844 161.351562 95.828125 Z M 139.519531 104.511719 C 136.332031 107.125 133.425781 110.164062 130.84375 113.589844 C 129.335938 113.757812 127.835938 113.890625 126.332031 113.996094 C 130.394531 110.433594 134.8125 107.25 139.519531 104.511719 Z M 170.886719 93.824219 C 174.316406 93.375 177.8125 93.125 181.359375 93.101562 C 182.367188 93.09375 183.378906 93.109375 184.378906 93.136719 C 183.425781 93.820312 182.460938 94.488281 181.484375 95.140625 C 179.425781 94.683594 177.347656 94.335938 175.265625 94.109375 C 173.789062 93.949219 172.328125 93.859375 170.886719 93.824219 Z M 125.0625 115.132812 C 126.707031 115.039062 128.359375 114.910156 130.007812 114.742188 C 127.074219 118.84375 124.585938 123.457031 122.601562 128.503906 C 119.535156 128.515625 116.480469 128.414062 113.445312 128.207031 C 116.851562 123.457031 120.746094 119.074219 125.0625 115.132812 Z M 186.113281 93.207031 C 193.046875 93.546875 199.742188 94.726562 206.109375 96.652344 C 203.953125 98.570312 201.726562 100.429688 199.429688 102.203125 C 194.125 99.179688 188.582031 96.894531 182.898438 95.472656 C 183.984375 94.734375 185.058594 93.980469 186.113281 93.207031 Z M 131.4375 114.597656 C 131.4375 114.59375 131.441406 114.597656 131.445312 114.59375 C 134.820312 114.207031 138.195312 113.667969 141.566406 112.96875 C 140.503906 117.109375 139.875 121.90625 139.726562 127.273438 C 134.28125 128.035156 128.851562 128.441406 123.460938 128.496094 C 125.605469 123.367188 128.28125 118.707031 131.4375 114.597656 Z M 181.714844 96.269531 C 187.597656 97.527344 193.332031 99.707031 198.808594 102.683594 C 194.585938 105.90625 190.136719 108.867188 185.480469 111.558594 C 181.578125 107.3125 177.613281 103.78125 173.683594 101.125 C 176.445312 99.605469 179.125 97.984375 181.714844 96.269531 Z M 142.378906 112.796875 C 147.597656 111.675781 152.800781 110.179688 157.953125 108.285156 L 163.292969 121.648438 C 159.476562 122.953125 155.566406 124.09375 151.558594 125.046875 C 147.757812 125.949219 143.953125 126.667969 140.15625 127.210938 C 140.398438 121.761719 141.15625 116.921875 142.378906 112.796875 Z M 172.949219 101.511719 C 177 104.042969 181.089844 107.527344 185.113281 111.777344 C 178.542969 115.546875 171.558594 118.753906 164.203125 121.332031 L 159.074219 107.859375 C 159.265625 107.785156 159.457031 107.71875 159.648438 107.644531 C 164.269531 105.863281 168.703125 103.804688 172.949219 101.511719 Z M 113.058594 128.753906 C 116.152344 128.949219 119.273438 129.03125 122.402344 129.003906 C 120.109375 134.976562 118.535156 141.546875 117.761719 148.582031 C 112.839844 148.519531 107.949219 148.203125 103.105469 147.652344 C 105.597656 140.898438 108.964844 134.5625 113.058594 128.753906 Z M 206.613281 96.804688 C 212.734375 98.695312 218.539062 101.277344 223.945312 104.453125 C 220.945312 107.554688 217.796875 110.53125 214.515625 113.367188 C 209.90625 109.089844 204.96875 105.398438 199.792969 102.410156 C 202.132812 100.613281 204.414062 98.75 206.613281 96.804688 Z M 123.253906 128.992188 C 128.707031 128.90625 134.203125 128.476562 139.714844 127.675781 C 139.578125 133.5 140 139.980469 141.023438 147.003906 C 133.398438 148.140625 125.785156 148.660156 118.238281 148.589844 C 119.105469 141.53125 120.816406 134.953125 123.253906 128.992188 Z M 199.175781 102.878906 C 204.453125 105.785156 209.480469 109.425781 214.167969 113.667969 C 208.792969 118.289062 203.050781 122.539062 196.960938 126.363281 C 193.339844 120.929688 189.554688 116.023438 185.710938 111.8125 C 190.414062 109.105469 194.90625 106.117188 199.175781 102.878906 Z M 140.144531 127.609375 C 143.828125 127.0625 147.515625 126.359375 151.203125 125.480469 C 155.375 124.488281 159.441406 123.300781 163.414062 121.933594 L 170.410156 139.445312 C 167.171875 140.644531 163.871094 141.742188 160.503906 142.722656 C 154.105469 144.59375 147.671875 146 141.25 146.96875 C 140.273438 139.910156 139.917969 133.417969 140.144531 127.609375 Z M 185.347656 112.015625 C 189.253906 116.171875 193.097656 121.046875 196.769531 126.476562 C 188.757812 131.492188 180.152344 135.78125 171.011719 139.21875 L 164.3125 121.621094 C 171.703125 119.019531 178.730469 115.792969 185.347656 112.015625 Z M 102.84375 148.390625 C 107.75 148.914062 112.707031 149.203125 117.691406 149.230469 C 117.09375 155.074219 117.046875 161.230469 117.621094 167.625 C 117.710938 168.601562 117.816406 169.574219 117.929688 170.546875 C 111.324219 170.496094 104.785156 170.050781 98.347656 169.238281 C 98.933594 161.992188 100.476562 155 102.84375 148.390625 Z M 224.417969 104.726562 C 230.511719 108.359375 236.082031 112.761719 241 117.785156 C 237.074219 121.972656 232.929688 125.957031 228.589844 129.730469 C 224.496094 123.789062 219.878906 118.382812 214.859375 113.675781 C 218.183594 110.828125 221.375 107.839844 224.417969 104.726562 Z M 118.164062 149.230469 C 125.753906 149.246094 133.417969 148.671875 141.089844 147.480469 C 141.589844 150.820312 142.21875 154.273438 142.988281 157.839844 C 143.757812 161.394531 144.644531 164.949219 145.632812 168.472656 C 142.226562 169.015625 138.78125 169.449219 135.304688 169.78125 C 129.5625 170.328125 123.863281 170.578125 118.210938 170.542969 C 118.113281 169.660156 118.015625 168.773438 117.941406 167.886719 C 117.382812 161.394531 117.480469 155.144531 118.164062 149.226562 Z M 214.511719 113.980469 C 219.589844 118.628906 224.261719 123.988281 228.386719 129.90625 C 221.9375 135.496094 215.054688 140.605469 207.78125 145.171875 C 204.484375 138.550781 200.910156 132.324219 197.160156 126.664062 C 203.289062 122.832031 209.085938 118.597656 214.511719 113.980469 Z M 141.308594 147.445312 C 147.582031 146.464844 153.859375 145.074219 160.117188 143.246094 C 163.660156 142.210938 167.132812 141.042969 170.539062 139.773438 L 178.515625 159.738281 C 168.097656 163.691406 157.140625 166.640625 145.757812 168.453125 C 144.808594 165.03125 143.957031 161.589844 143.222656 158.140625 C 142.433594 154.453125 141.796875 150.886719 141.3125 147.445312 Z M 196.96875 126.78125 C 200.757812 132.40625 204.359375 138.617188 207.671875 145.238281 C 198.613281 150.914062 188.957031 155.757812 178.785156 159.636719 L 171.140625 139.550781 C 180.292969 136.085938 188.921875 131.792969 196.972656 126.777344 Z M 196.96875 126.78125 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>
            </g>
          </g>
        </svg>
      </LoadingInnerContainer>
    </LoadingContainer>
  );
}

export default Loading;
