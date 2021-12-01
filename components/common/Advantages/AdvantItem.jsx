import Image from 'next/image'

const AdvantItem = ({TITLE, DESCRIPTION, alt}) => {
  return (
    <div className="matchmaking__advant-item">
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5656 2.40932L7.34299 0.15429C6.8665 -0.0514458 6.31999 -0.0514145 5.8437 0.15429L0.621055 2.40932C0.243778 2.57221 1.98482e-06 2.93804 1.98482e-06 3.34139V6.77129C-0.0014046 8.96784 0.744834 11.1289 2.10131 12.8562C2.18167 12.9586 2.32943 12.9754 2.43045 12.8958C2.53229 12.8159 2.55001 12.6685 2.47005 12.5667C1.17822 10.9216 0.467519 8.86351 0.468863 6.77142V3.34139C0.468863 3.1253 0.60155 2.92841 0.80688 2.83977L6.02955 0.584736C6.38779 0.429981 6.7988 0.429981 7.1571 0.584736L12.3797 2.83977C12.5851 2.92841 12.7178 3.1253 12.7178 3.34139V4.65651C12.7178 4.78601 12.8227 4.89094 12.9522 4.89094C13.0817 4.89094 13.1866 4.78601 13.1866 4.65651V3.34139C13.1866 2.93804 12.9429 2.57221 12.5656 2.40932Z"
          fill="white"
        />
        <path
          d="M12.9522 5.52344C12.8227 5.52344 12.7178 5.62837 12.7178 5.75787V6.77164C12.72 10.2965 10.7773 13.4886 7.64765 15.1027L6.94674 15.4494C6.72546 15.5588 6.46125 15.5589 6.23997 15.4494L5.53903 15.1027C4.66326 14.651 3.86838 14.0673 3.1765 13.3677C3.08542 13.2756 2.93698 13.2748 2.84499 13.3658C2.75293 13.4568 2.75209 13.6053 2.84311 13.6973C3.57022 14.4325 4.40554 15.0458 5.32592 15.5202C5.32707 15.5209 5.32823 15.5214 5.32938 15.522L6.03208 15.8696C6.20781 15.9565 6.40058 16 6.59334 16C6.7861 16 6.97887 15.9565 7.1546 15.8696L7.8573 15.522C7.85845 15.5214 7.85961 15.5209 7.86076 15.5202C9.46642 14.6926 10.8119 13.439 11.7518 11.895C12.6916 10.3511 13.1878 8.57935 13.1866 6.77142V5.75784C13.1867 5.62837 13.0817 5.52344 12.9522 5.52344Z"
          fill="white"
        />
        <path
          d="M3.17195 2.66966L1.39175 3.43831C1.30585 3.47541 1.25025 3.55999 1.25025 3.65355V6.77203C1.24925 8.35044 1.68235 9.89712 2.50279 11.2449C3.32121 12.5893 4.4923 13.6818 5.8896 14.4042C6.05226 14.4721 6.41135 14.7047 6.59333 14.6887C6.77337 14.7054 7.13618 14.4714 7.297 14.4042C7.92058 14.0818 8.50363 13.683 9.02988 13.2189C9.12696 13.1333 9.13628 12.9851 9.05063 12.888C8.96499 12.7909 8.81686 12.7816 8.71974 12.8672C8.22278 13.3055 7.67224 13.6822 7.08338 13.9868L6.62787 14.2121C6.6063 14.2228 6.58039 14.2228 6.55863 14.212L6.10318 13.9868C4.78309 13.3039 3.67664 12.2715 2.9033 11.0011C2.12767 9.72686 1.71817 8.26457 1.71911 6.77216V3.80765L3.35781 3.1001C3.47668 3.04875 3.53144 2.91081 3.48012 2.79197C3.42879 2.67307 3.2907 2.61833 3.17195 2.66966Z"
          fill="white"
        />
        <path
          d="M9.49257 12.4435C9.58975 12.5283 9.738 12.5187 9.8233 12.4207C10.1418 12.0552 10.4313 11.6596 10.6837 11.2449C11.5042 9.89719 11.9373 8.35023 11.9363 6.77145V3.65365C11.9363 3.5601 11.8807 3.47551 11.7948 3.43841L6.8481 1.30256C6.68613 1.23189 6.50034 1.23189 6.3393 1.30219L4.20786 2.2225C4.08899 2.27386 4.03422 2.41179 4.08555 2.53063C4.13687 2.64954 4.27494 2.70427 4.39368 2.65295L6.526 1.73226C6.56813 1.71385 6.61839 1.71385 6.66144 1.73263L11.4675 3.80778V6.77161C11.4684 8.26443 11.0589 9.72699 10.2833 11.0012C10.0446 11.3932 9.77095 11.7672 9.46988 12.1127C9.38476 12.2103 9.39495 12.3585 9.49257 12.4435Z"
          fill="white"
        />
        <path
          d="M9.01971 4.96899C8.89021 4.96899 8.78528 5.07393 8.78528 5.20343V8.14134C8.78528 8.25556 8.86761 8.35318 8.9802 8.37243C8.99683 8.37528 9.0149 8.37837 9.3345 8.37837C9.49013 8.37837 9.71734 8.37765 10.0506 8.37578C10.1801 8.37506 10.2845 8.26953 10.2838 8.14003C10.283 8.011 10.1782 7.90691 10.0494 7.90691C10.0489 7.90691 10.0485 7.90691 10.048 7.90691C9.81177 7.90826 9.47425 7.90948 9.25414 7.90938V5.20343C9.25414 5.07396 9.14921 4.96899 9.01971 4.96899Z"
          fill="white"
        />
        <path
          d="M7.10309 7.90962C6.77392 7.90962 6.45578 7.77546 6.25214 7.55078C6.16515 7.45479 6.0169 7.4476 5.921 7.53449C5.82508 7.62145 5.81776 7.76971 5.90472 7.86564C6.19579 8.18677 6.64377 8.37851 7.10309 8.37851C7.64922 8.37851 8.12483 8.02145 8.20935 7.54803C8.27308 7.19107 8.10436 6.72233 7.43958 6.47712C7.05649 6.3358 6.70153 6.18142 6.61729 6.14438C6.51324 6.06952 6.46254 5.94893 6.48126 5.81846C6.50433 5.65774 6.62667 5.52908 6.80852 5.47432C7.29548 5.32756 7.73268 5.67952 7.74062 5.68602C7.83973 5.76867 7.98708 5.75567 8.07016 5.65677C8.15346 5.55765 8.14068 5.40977 8.04156 5.32647C8.01606 5.305 7.40844 4.80394 6.6733 5.02534C6.31753 5.13252 6.0661 5.41087 6.01718 5.75179C5.97173 6.06846 6.10883 6.37297 6.37495 6.54651C6.38533 6.55329 6.39621 6.5592 6.40749 6.56423C6.42434 6.57173 6.82537 6.75021 7.27729 6.91691C7.61624 7.04194 7.78772 7.24189 7.74777 7.46554C7.70933 7.68081 7.47033 7.90962 7.10309 7.90962Z"
          fill="white"
        />
        <path
          d="M3.07608 5.75157C3.03063 6.06824 3.16773 6.37275 3.43385 6.54629C3.44423 6.55308 3.45511 6.55898 3.46639 6.56402C3.48324 6.57152 3.88427 6.75 4.33619 6.91669C4.67514 7.04172 4.84662 7.24167 4.80667 7.46532C4.76826 7.68059 4.52923 7.90936 4.16199 7.90936C3.83282 7.90936 3.51468 7.77521 3.31104 7.55053C3.22409 7.45454 3.0758 7.44735 2.9799 7.53424C2.88397 7.6212 2.87666 7.76945 2.96362 7.86538C3.25469 8.18652 3.70267 8.37825 4.16199 8.37825C4.70812 8.37825 5.18373 8.0212 5.26825 7.54778C5.33199 7.19082 5.16326 6.72208 4.49848 6.47687C4.11539 6.33556 3.76043 6.18118 3.67619 6.14414C3.57214 6.06927 3.52144 5.94868 3.54016 5.81822C3.56323 5.65749 3.68557 5.52884 3.86742 5.47407C4.35438 5.32732 4.79158 5.67928 4.79952 5.68578C4.89863 5.76842 5.04598 5.75542 5.12906 5.65652C5.21236 5.5574 5.19958 5.40953 5.10046 5.32622C5.07496 5.30475 4.46734 4.8037 3.7322 5.02509C3.37643 5.1323 3.125 5.41065 3.07608 5.75157Z"
          fill="white"
        />
      </svg>
      <p>{TITLE}</p>
      <div className="matchmaking__advant-item-info">
        <div className="matchmaking__advant-info-text">
          <p>
            {DESCRIPTION}
          </p>
          <Image src={'/img/matchmaking/advant-info-bg.svg'} alt={alt} layout="fill"/>
        </div>
      </div>
    </div>
  );
};

export default AdvantItem;