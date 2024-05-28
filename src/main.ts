import { navigate } from 'astro:transitions/client'
import { atom } from 'nanostores'
const baseUrl = import.meta.env.BASE_URL

const $answers = atom([0, 0, 0])

const scripts = () => {
	const revealGroupElements = document.querySelectorAll('.reveal-group')
	const intersectionObserver = new IntersectionObserver(entries => {
		entries.forEach(({ target, isIntersecting }) => {
			target.classList.toggle('reveal-group-active', isIntersecting)
		})
	})
	revealGroupElements.forEach(element => intersectionObserver.observe(element))

	const answers = $answers.get()
	const path = window.location.pathname
	const answer = JSON.stringify(answers)

	if ((path === `${baseUrl}test-2` || path === `${baseUrl}test-3` || path === `${baseUrl}loading`) && answer === JSON.stringify([0, 0, 0])) {
		navigate('/')
	} else if (path === `${baseUrl}loading/`) {
		if (answer === '[1,1,1]' || answer === '[1,1,2]' || answer === '[1,1,3]' || answer === '[1,2,1]' || answer === '[1,3,1]' || answer === '[2,1,1]' || answer === '[3,1,1]' || answer === '[1,2,3]' || answer === '[1,3,2]' || answer === '[2,1,3]' || answer === '[2,3,1]' || answer === '[3,1,2]' || answer === '[3,2,1]') {
			setTimeout(() => navigate(`${baseUrl}plan-1`), 2000)
		} else if (answer === '[2,2,2]' || answer === '[2,2,1]' || answer === '[2,2,3]' || answer === '[2,1,2]' || answer === '[2,3,2]' || answer === '[1,2,2]' || answer === '[3,2,2]') {
			setTimeout(() => navigate(`${baseUrl}plan-2`), 2000)
		} else if (answer === '[3,3,3]' || answer === '[3,3,1]' || answer === '[3,3,2]' || answer === '[3,1,3]' || answer === '[3,2,3]' || answer === '[1,3,3]' || answer === '[2,3,3]') {
			setTimeout(() => navigate(`${baseUrl}plan-3`), 2000)
		}
	}

	const forms = document.querySelectorAll<HTMLFormElement>('form[data-submit]')
	forms.forEach(form => {
		const num = Number(form.dataset.submit)
		form.addEventListener('submit', event => {
			event.preventDefault()
			const answers = $answers.get()
			answers[num - 1] = Number(form.test.value)
			$answers.set(answers)
			const goTo = num === 3 ? `${baseUrl}loading` : `${baseUrl}test-${num + 1}`
			navigate(goTo)
		})
	})
}

scripts()

document.addEventListener('astro:after-swap', () => scripts())
