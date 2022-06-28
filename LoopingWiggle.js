freq = 1;
amp = 110;
loopTime = 3;
t = time % loopTime;
wiggle1 = wiggle(freq, amp, 1, 0.5, t);
wiggle2 = wiggle(freq, amp, 1, 0.5, t - loopTime);
linear(t, 0, loopTime, wiggle1, wiggle2)