import instagramIcon from '../../assets/instagram.png';
import {
  FooterContent,
  FooterFrame,
  FooterIcon,
  FooterText,
} from './Footer.styles.js';

const INSTAGRAM_URL =
  'https://www.instagram.com/lovely_communication?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';

export function Footer() {
  return (
    <FooterFrame>
      <FooterContent>
        <FooterText>
          <strong>경북대학교 컴퓨터학부 SW교육봉사 동아리 L&C</strong>
          <span>대구광역시 북구 대학로 80</span>
        </FooterText>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FooterIcon src={instagramIcon} alt="" />
        </a>
      </FooterContent>
    </FooterFrame>
  );
}
