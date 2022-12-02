/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export function MLHBanner() {
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <a
      id="mlh-trust-badge"
      className={
        'block fixed w-full max-w-[60px] md:max-w-[100px] top-0 z-[500] ' +
        (status === 'authenticated' &&
        !session.user.uid &&
        router.pathname !== '/apply'
          ? 'right-44 md:right-[14.25rem] '
          : session
          ? 'right-[4.25rem] md:right-[7.5rem]'
          : 'right-[7.5rem] md:right-[10.75rem]')
      }
      href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=black"
      target="_blank"
    >
      <img
        src="https://citrushack2023.s3.us-west-1.amazonaws.com/mlh-trust-badge-2023-white.svg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIQDZHbkq486RpjNqKNDJllicybhaVbQ8pXYkjUWcm8yA7QIgLguxUimVdQ1PZ0iSyKyuH9NveApyQbs1BKDEEiTzLdQq7QIIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw1MzQ1NzI0NzEyNDMiDPENfQuJmiUNBFGbmirBAmXot5%2B4KOq4XtpLbVjAnugvOpf%2FBYnOAzNEfj6GKIZmhQifUsUtsWANnWm2Iz3QoG89FCkikjyTwF6K5vMS49UHNNR5J%2B%2BlU%2B7t%2FJg0YoOGAKhF03lehm4FgDHdLR5buwGV3bqN5HtboWmEWmVRSQUh3eKuSItHwjsr1wvprf25L7vgUeClWdXbQ%2Ff8k8lpVFnqiYSPt0ZcADlQwvgFYqAGKiwUu5tHH1w7%2Bkip3ZSZfFCskHCex3nu6FKHGF9NSCjQvkr0T7KB2rMNjtGYH0LT2u1DqLfMHu0rLpVNbHxKBWrds197TFyOr2dtAozRDZQ0l6wBJu5l3m1ds2ATIbOya9Aim2GXX%2BFubWH1Xa7g%2FBY9VMWW%2BnO8HsT5F7UG%2FXcKlya2zcCTluKmeksGE%2FVzc7xOoW%2FyE512bh8W053wgjCmnqacBjqzAr4rEUT1a8ne4ZFrMrmnJG%2FFAOPgj7IRXtN4xnkRD3PAuBAL5dWEjvokLYVDRE3Q%2F8SmnZ4edadBOvNarI6BjTiLJxArGEZjLLUk%2B9HLodG7Q0N0%2FIXNxO26GB82b4VDd0fGCVoRTxEQPYbW%2Fq8WByukcsOppOKDFB5ka7jnXiER%2F1UpJmbY%2FtcmiXUhFRbsjBj5%2FJ6fjpdgdrUevTxA9tq6xhRUn9%2BO%2BZzjeAt0EeHUNcmK97UTHUqUlj%2F7FpWNKJaMskQJbmLo0x392OOSlYh6kCEUwETduyqHuKcCLeWHBSFQHMWnxQN4kTQno9oDM8msbBJ0rQT75Zyg%2BgANN46CemF6JJEY5fsYUNYz4dpWuwFZqEfxsFmdp5niQkQe7aTyyWbupYuEs0nL2EXNIixAv1U%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221202T053911Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXY5YASPFYHVGIC6O%2F20221202%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=858df9a9f759ddcde1e45b85afab9586f1b1889d6e8690638ab67dd7c29adbe2"
        alt="Major League Hacking 2022 Hackathon Season"
        className="w-full"
      />
    </a>
  );
}
