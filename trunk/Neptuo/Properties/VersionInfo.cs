﻿using System;

namespace Neptuo
{
    public static class VersionInfo
    {
        internal const string Version = "3.7.13";

        public static Version GetVersion()
        {
            return new Version(Version);
        }
    }
}
