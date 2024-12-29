<template>
    <div>
      <HeaderSection />
      <AboutSection />
      <ServicesSection />
      <LeadersSection />
      <ClientsSection />
      <ContactSection />
      <FooterSection />
    </div>
  </template>
  
  <script setup>
  import HeaderSection from '@/components/HeaderSection.vue';
  import AboutSection from '@/components/AboutSection.vue';
  import ServicesSection from '@/components/ServicesSection.vue';
  import LeadersSection from '@/components/LeadersSection.vue';
  import ClientsSection from '@/components/ClientsSection.vue';
  import ContactSection from '@/components/ContactSection.vue';
  import FooterSection from '@/components/FooterSection.vue';
  import { onMounted } from 'vue';

onMounted(() => {
  const sections = document.querySelectorAll('section');

  const revealSection = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealSection);
  revealSection();
});
</script>


  