import { CenteredFlex, Text, TextProps } from "../styles"

export enum SocialSite {
	TWITTER = "Twitter",
	DISCORD = "Discord",
	WEBSITE = "Website"
}

const iconMap = {
	[ SocialSite.TWITTER ]: TwitterSVG,
	[ SocialSite.DISCORD ]: DiscordSVG,
	[ SocialSite.WEBSITE ]: WebsiteSVG
}

type SocialLinkProps = TextProps & {
	type: SocialSite,
	link: string,
	scale?: number,
	withLabel?: boolean
}

export function SocialLink({ type, link, scale, withLabel, ...props }: SocialLinkProps) {
	return (
		<CenteredFlex
			as="a"
			href={link}
			target="_blank"
			rel="noreferrer"
			column
			gap={12}>
			{withLabel && <Text {...props}>{type}</Text>}
			{iconMap[ type ](scale)}
		</CenteredFlex>
	)
}

function TwitterSVG(scale: number = 1) {
	return (
		<svg width={Math.round(22 * scale)} height={Math.round(19 * scale)} viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M21.3307 2.88183C20.536 3.23169 19.6942 3.46263 18.8323 3.56722C19.7398 3.02178 20.4192 2.16642 20.7452 1.15908C19.9042 1.64991 18.972 2.00719 17.9798 2.20617C17.3251 1.50613 16.4577 1.04183 15.5121 0.88537C14.5665 0.728908 13.5957 0.889039 12.7505 1.3409C11.9052 1.79276 11.2328 2.51106 10.8377 3.38426C10.4425 4.25746 10.3468 5.2367 10.5652 6.16991C6.94816 5.99923 3.74233 4.26233 1.59685 1.63664C1.20666 2.29975 1.00314 3.05607 1.00786 3.82545C1.00786 5.33772 1.77726 6.66693 2.94286 7.44783C2.25204 7.42584 1.57648 7.23906 0.972485 6.90306V6.957C0.972093 7.96199 1.31939 8.93616 1.95547 9.71425C2.59154 10.4923 3.4772 11.0264 4.4622 11.2258C3.82395 11.3969 3.15547 11.4226 2.50598 11.301C2.78566 12.1659 3.32829 12.9219 4.05818 13.4636C4.78807 14.0053 5.66883 14.3057 6.57761 14.3229C5.03836 15.5308 3.13783 16.1865 1.1812 16.1845C0.836292 16.1845 0.492272 16.1642 0.146484 16.1253C2.14136 17.4026 4.46089 18.0806 6.82966 18.0788C14.8367 18.0788 19.2099 11.4496 19.2099 5.71004C19.2099 5.52521 19.2099 5.33861 19.1967 5.15289C20.0509 4.53812 20.7878 3.77487 21.3722 2.89952L21.3307 2.88183Z" fill="#EDE9D7"/>
		</svg>
	)
}

function DiscordSVG(scale: number = 1) {
	return (
		<svg width={Math.round(26 * scale)} height={Math.round(18 * scale)} viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M16.297 0.595888H16.2434L15.8976 0.935312C19.4271 1.95869 21.1344 3.55372 21.1344 3.55372C18.8618 2.41678 16.8074 1.84512 14.7607 1.61288C13.2856 1.38703 11.8028 1.50697 10.5536 1.61288H10.2078C9.4103 1.61288 7.70935 1.95869 5.42909 2.86849C4.63795 3.2143 4.17986 3.44015 4.17986 3.44015C4.17986 3.44015 5.8808 1.73155 9.64253 0.821745L9.4103 0.595888C9.4103 0.595888 6.56603 0.482321 3.49591 2.7562C3.49591 2.7562 0.425781 8.10659 0.425781 14.6986C0.425781 14.6986 2.12673 17.6564 6.79316 17.7687C6.79316 17.7687 7.47711 16.8652 8.16234 16.0677C5.54393 15.2702 4.52056 13.6752 4.52056 13.6752C4.52056 13.6752 4.75279 13.7887 5.09222 14.0146H5.19175C5.24534 14.0146 5.27214 14.0414 5.29766 14.0682V14.081C5.32445 14.1077 5.35125 14.1269 5.39719 14.1269C5.96247 14.3591 6.52009 14.585 6.97946 14.8108C7.77698 15.1503 8.79397 15.4948 10.0432 15.7219C11.6255 15.9542 13.4387 16.0613 15.5059 15.7219C16.5229 15.4897 17.5463 15.2702 18.5696 14.8108C19.2281 14.4714 20.0447 14.1333 20.9418 13.5552C20.9418 13.5552 19.9248 15.1503 17.1928 15.9478C17.7517 16.7389 18.5416 17.6487 18.5416 17.6487C23.2131 17.5428 25.0276 14.585 25.1271 14.7113C25.1271 8.12573 22.0366 2.76896 22.0366 2.76896C19.2587 0.701799 16.653 0.622685 16.1949 0.622685L16.2881 0.589508L16.297 0.595888ZM16.5829 8.10659C17.7798 8.10659 18.7432 9.12358 18.7432 10.3728C18.7432 11.6361 17.7734 12.6518 16.5829 12.6518C15.3859 12.6518 14.4225 11.6348 14.4225 10.3856C14.4225 9.12231 15.3923 8.10659 16.5829 8.10659ZM8.85395 8.10659C10.0432 8.10659 11.0079 9.12358 11.0079 10.3728C11.0079 11.6361 10.0381 12.6518 8.84757 12.6518C7.65065 12.6518 6.68087 11.6348 6.68087 10.3856C6.68087 9.12231 7.65065 8.10659 8.84757 8.10659H8.85395Z" fill="#EDE9D7"/>
		</svg>
	)
}

function WebsiteSVG(scale: number = 1) {
	return (
		<svg width={Math.round(20 * scale)} height={Math.round(19 * scale)} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10.0532 0.210785C4.95154 0.210785 0.820312 4.35125 0.820312 9.4529C0.820312 14.5545 4.95154 18.695 10.0532 18.695C15.1641 18.695 19.3045 14.5545 19.3045 9.4529C19.3045 4.35125 15.1641 0.210785 10.0532 0.210785ZM16.458 5.75605H13.7315C13.4358 4.60079 13.0107 3.49173 12.4561 2.46586C14.1567 3.04811 15.5707 4.2311 16.458 5.75605ZM10.0624 2.09618C10.8295 3.20523 11.4303 4.43443 11.8277 5.75605H8.29718C8.69459 4.43443 9.29533 3.20523 10.0624 2.09618ZM2.90903 11.3013C2.76116 10.7098 2.66873 10.0906 2.66873 9.4529C2.66873 8.81519 2.76116 8.19597 2.90903 7.60447H6.03286C5.95893 8.21445 5.90347 8.82443 5.90347 9.4529C5.90347 10.0814 5.95893 10.6913 6.03286 11.3013H2.90903ZM3.66688 13.1497H6.39331C6.68905 14.305 7.11419 15.4141 7.66872 16.4399C5.96817 15.8577 4.55413 14.6839 3.66688 13.1497V13.1497ZM6.39331 5.75605H3.66688C4.55413 4.22186 5.96817 3.04811 7.66872 2.46586C7.11419 3.49173 6.68905 4.60079 6.39331 5.75605V5.75605ZM10.0624 16.8096C9.29533 15.7006 8.69459 14.4714 8.29718 13.1497H11.8277C11.4303 14.4714 10.8295 15.7006 10.0624 16.8096ZM12.2251 11.3013H7.89977C7.81659 10.6913 7.7519 10.0814 7.7519 9.4529C7.7519 8.82443 7.81659 8.20521 7.89977 7.60447H12.2251C12.3083 8.20521 12.373 8.82443 12.373 9.4529C12.373 10.0814 12.3083 10.6913 12.2251 11.3013ZM12.4561 16.4399C13.0107 15.4141 13.4358 14.305 13.7315 13.1497H16.458C15.5707 14.6747 14.1567 15.8577 12.4561 16.4399V16.4399ZM14.092 11.3013C14.1659 10.6913 14.2214 10.0814 14.2214 9.4529C14.2214 8.82443 14.1659 8.21445 14.092 7.60447H17.2158C17.3637 8.19597 17.4561 8.81519 17.4561 9.4529C17.4561 10.0906 17.3637 10.7098 17.2158 11.3013H14.092Z" fill="#EDE9D7"/>
		</svg>
	)
}