<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="UTF-8">
	<title>Подтверждение email</title>
</head>

<body style="font-family: 'Segoe UI', sans-serif; background-color: #f9f9f9; padding: 40px;">
	<div
		style="max-width: 600px; margin: auto; background: white; border-radius: 10px; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
		<div style="text-align: center;">
			{{-- <img src="/public/logo-mechta.svg" alt="MechtaApp" style="height: 60px; margin-bottom: 20px;"> --}}
			<img src="https://imgur.com/a/GVkmqc7" alt="MechtaApp" style="height: 60px; margin-bottom: 20px;">
			<h2 style="color: #323343;">Добро пожаловать в MechtaApp</h2>
		</div>

		<p style="font-size: 16px; color: #4a4a4a;">Пожалуйста, подтвердите свою электронную почту, чтобы активировать
			аккаунт:</p>

		<div style="text-align: center; margin: 30px 0;">
			<a href="{{ $url }}"
				style="background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 16px;">Подтвердить
				email</a>
		</div>

		<p style="font-size: 14px; color: #999;">Если вы не регистрировались — просто проигнорируйте это письмо.</p>

		<p style="font-size: 14px; color: #999; margin-top: 30px;">С уважением,<br>Команда MechtaApp</p>
	</div>
</body>

</html>