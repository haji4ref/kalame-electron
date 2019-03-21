import Learn from './pages/Learn';
import Welcome from './pages/Welcome';
import Exam from './pages/Exam';
export default [
    {
        path: '/', component: Welcome
    },
    {
        path: '/learn', component: Learn
    },
    {
        path: '/exam', component: Exam
    }
]