﻿using System;

namespace Neptuo.Bootstrap
{
    public static class VersionInfo
    {
        internal const string Version = "3.4.0";

        public static Version GetVersion()
        {
            return new Version(Version);
        }
    }
}
