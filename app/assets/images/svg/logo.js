
import React from 'react';
import Svg, { Path, Defs, G, Use, Rect } from 'react-native-svg'

export default props => (
    <Svg width="204" height="62" viewBox="0 0 204 62" {...props}>
        <Defs>
            <Path d="M12.09375,1.16015625 L13.8164062,7.734375 C15.1523504,12.9140884 16.0664038,16.6757695 16.5585938,19.0195312 C19.2070445,9.36323297 20.8359345,3.63282152 21.4453125,1.828125 L33.2578125,1.828125 C33.6328144,3.21094441 34.2304646,5.49607781 35.0507812,8.68359375 C35.8710979,11.8711097 36.7617139,15.5859163 37.7226562,19.828125 C38.4023471,16.8046724 39.4335868,12.7734627 40.8164062,7.734375 L42.609375,1.16015625 L54.4921875,1.16015625 L42.8203125,33.8554688 L32.0273438,33.8554688 C31.0195262,30.2929509 30.070317,26.8007984 29.1796875,23.3789062 C28.289058,19.9570141 27.6562519,17.4023522 27.28125,15.7148438 C26.9062481,17.355477 26.2617233,19.874983 25.3476562,23.2734375 C24.4335892,26.671892 23.4257868,30.1992005 22.3242188,33.8554688 L10.9335938,33.8554688 L0,1.16015625 L12.09375,1.16015625 Z M53.8984375,17.4375 C53.8984375,14.0390455 54.6718673,11.0156382 56.21875,8.3671875 C57.7656327,5.71873676 59.9160019,3.6621167 62.6699219,2.19726562 C65.4238419,0.732414551 68.6054507,0 72.2148438,0 C75.8242368,0 79.0058456,0.732414551 81.7597656,2.19726562 C84.5136856,3.6621167 86.6581954,5.71873676 88.1933594,8.3671875 C89.7285233,11.0156382 90.4960938,14.0390455 90.4960938,17.4375 C90.4960938,20.8359545 89.7285233,23.8476431 88.1933594,26.4726562 C86.6581954,29.0976694 84.5078263,31.1425708 81.7421875,32.6074219 C78.9765487,34.0722729 75.8007992,34.8046875 72.2148438,34.8046875 C68.6054507,34.8046875 65.4238419,34.0722729 62.6699219,32.6074219 C59.9160019,31.1425708 57.7656327,29.0976694 56.21875,26.4726562 C54.6718673,23.8476431 53.8984375,20.8359545 53.8984375,17.4375 Z M65.2890625,17.3671875 C65.2890625,19.5703235 65.927728,21.3808523 67.2050781,22.7988281 C68.4824283,24.216804 70.1523334,24.9257812 72.2148438,24.9257812 C74.2773541,24.9257812 75.9413999,24.216804 77.2070312,22.7988281 C78.4726626,21.3808523 79.1054688,19.5703235 79.1054688,17.3671875 C79.1054688,15.1640515 78.4726626,13.37696 77.2070312,12.0058594 C75.9413999,10.6347588 74.2773541,9.94921875 72.2148438,9.94921875 C70.1523334,9.94921875 68.4824283,10.6347588 67.2050781,12.0058594 C65.927728,13.37696 65.2890625,15.1640515 65.2890625,17.3671875 Z M92.7851562,17.4375 C92.7851562,14.0390455 93.558586,11.0156382 95.1054688,8.3671875 C96.6523515,5.71873676 98.8027206,3.6621167 101.556641,2.19726562 C104.310561,0.732414551 107.492169,0 111.101562,0 C114.710956,0 117.892564,0.732414551 120.646484,2.19726562 C123.400404,3.6621167 125.544914,5.71873676 127.080078,8.3671875 C128.615242,11.0156382 129.382812,14.0390455 129.382812,17.4375 C129.382812,20.8359545 128.615242,23.8476431 127.080078,26.4726562 C125.544914,29.0976694 123.394545,31.1425708 120.628906,32.6074219 C117.863267,34.0722729 114.687518,34.8046875 111.101562,34.8046875 C107.492169,34.8046875 104.310561,34.0722729 101.556641,32.6074219 C98.8027206,31.1425708 96.6523515,29.0976694 95.1054688,26.4726562 C93.558586,23.8476431 92.7851562,20.8359545 92.7851562,17.4375 Z M104.175781,17.3671875 C104.175781,19.5703235 104.814447,21.3808523 106.091797,22.7988281 C107.369147,24.216804 109.039052,24.9257812 111.101562,24.9257812 C113.164073,24.9257812 114.828119,24.216804 116.09375,22.7988281 C117.359381,21.3808523 117.992188,19.5703235 117.992188,17.3671875 C117.992188,15.1640515 117.359381,13.37696 116.09375,12.0058594 C114.828119,10.6347588 113.164073,9.94921875 111.101562,9.94921875 C109.039052,9.94921875 107.369147,10.6347588 106.091797,12.0058594 C104.814447,13.37696 104.175781,15.1640515 104.175781,17.3671875 Z M121.671875,17.4375 C121.671875,14.0390455 122.445305,11.0156382 123.992188,8.3671875 C125.53907,5.71873676 127.689439,3.6621167 130.443359,2.19726562 C133.197279,0.732414551 136.378888,0 139.988281,0 C143.597674,0 146.779283,0.732414551 149.533203,2.19726562 C152.287123,3.6621167 154.431633,5.71873676 155.966797,8.3671875 C157.501961,11.0156382 158.269531,14.0390455 158.269531,17.4375 C158.269531,20.8359545 157.501961,23.8476431 155.966797,26.4726562 C154.431633,29.0976694 152.281264,31.1425708 149.515625,32.6074219 C146.749986,34.0722729 143.574237,34.8046875 139.988281,34.8046875 C136.378888,34.8046875 133.197279,34.0722729 130.443359,32.6074219 C127.689439,31.1425708 125.53907,29.0976694 123.992188,26.4726562 C122.445305,23.8476431 121.671875,20.8359545 121.671875,17.4375 Z M133.0625,17.3671875 C133.0625,19.5703235 133.701165,21.3808523 134.978516,22.7988281 C136.255866,24.216804 137.925771,24.9257812 139.988281,24.9257812 C142.050792,24.9257812 143.714837,24.216804 144.980469,22.7988281 C146.2461,21.3808523 146.878906,19.5703235 146.878906,17.3671875 C146.878906,15.1640515 146.2461,13.37696 144.980469,12.0058594 C143.714837,10.6347588 142.050792,9.94921875 139.988281,9.94921875 C137.925771,9.94921875 136.255866,10.6347588 134.978516,12.0058594 C133.701165,13.37696 133.0625,15.1640515 133.0625,17.3671875 Z" id="path-1"></Path>
        </Defs>
        <G id="Phone-Screen" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <G id="Login-Screen" transform="translate(-86.000000, -101.000000)">
                <G id="Title" transform="translate(0.000000, 101.000000)">
                    <G id="Overlay" fill="#EAEAEA" fill-rule="nonzero">
                        <Rect id="Rectangle" x="91" y="0" width="97" height="18" rx="9"></Rect>
                        <Rect id="Rectangle" x="86" y="44" width="78" height="18" rx="9"></Rect>
                        <Rect id="Rectangle" x="193" y="44" width="71" height="18" rx="9"></Rect>
                        <Rect id="Rectangle" x="125" y="22" width="59" height="18" rx="9"></Rect>
                        <Rect id="Rectangle" x="196" y="0" width="81" height="18" rx="9"></Rect>
                        <Rect id="Rectangle" x="193" y="22" width="97" height="18" rx="9"></Rect>
                    </G>
                    <G id="Logo" transform="translate(106.000000, 9.000000)">
                        <Use href="#path-1"></Use>
                        <Use id="wooo" fill="#493D37" href="#path-1"></Use>
                    </G>
                </G>
            </G>
        </G>
    </Svg>
)
