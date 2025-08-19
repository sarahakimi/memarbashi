'use client';
import * as LandingStyles from '../styled';

export default function EarlyAccess(props: {
  title: string; desc: string; name: string; email: string; role: string; roles: string[];
  reason: string; cta: string; toast: string;
}) {
  const { title, desc, name, email, role, roles, reason, cta, toast } = props;
  return (
    <LandingStyles.StandardSection id="early-access">
      <LandingStyles.Heading2>{title}</LandingStyles.Heading2>
      <LandingStyles.BodyText>{desc}</LandingStyles.BodyText>
      <LandingStyles.FormContainer onSubmit={(e) => { e.preventDefault(); alert(toast); (e.currentTarget as HTMLFormElement).reset(); }}>
        <LandingStyles.TextInput placeholder={name} required />
        <LandingStyles.TextInput type="email" placeholder={email} required />
        <LandingStyles.SelectInput defaultValue="">
          <option value="" disabled>{role}</option>
          {roles.map((r) => <option key={r}>{r}</option>)}
        </LandingStyles.SelectInput>
        <LandingStyles.TextAreaInput rows={3} placeholder={reason} />
        <LandingStyles.PrimaryButton type="submit">{cta}</LandingStyles.PrimaryButton>
      </LandingStyles.FormContainer>
    </LandingStyles.StandardSection>
  );
}
