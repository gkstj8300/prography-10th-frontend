import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { Application } from 'src/components/pages/Application';

const ApplicationPage: React.FC = () => {
	const [notFound, setNotFound] = useState(false);

	const load = useCallback(async () => {
		setNotFound(false);

		// 필요한 데이터 로직 삽입
	}, []);

	useEffect(() => {
		load();
	}, []);

	if (notFound) {
		return <div>Not Found</div>;
	}

	return <Application />;
};
ApplicationPage.displayName = 'ApplicationPage';

export default ApplicationPage;
