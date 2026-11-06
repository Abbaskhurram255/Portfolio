import { skills } from './skill_constants';

let BASE = "/Portfolio";

BASE = BASE.replace("\\", "/")
if (BASE == '/') {
	BASE = '';
}
else {
	BASE = BASE.trim('/');
}

export { BASE, skills };